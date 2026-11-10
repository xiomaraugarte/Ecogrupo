
import ButtonG from "@/components/ButtonG";
import Buttonprin from "@/components/Buttonprin";
import Buttonsec from "@/components/Buttonsec";
import Header from "@/components/Header";
import RegisterForm from "@/components/LoginForm";
import { colors } from "@/constants/colors";
import * as Haptics from 'expo-haptics';
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";

export default function Login() {
    const router = useRouter();
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');

    const CORREO_CORRECTO = 'xiomarocastro@gmail.com';
    const CONTRASENA_CORRECTA = '12345678';

    const verificarAcceso = () => {
        if (
            correo.trim().toLowerCase() !== CORREO_CORRECTO ||
            contrasena !== CONTRASENA_CORRECTA
        ) {
            Alert.alert(
                'Acceso denegado',
                'El correo electrónico o la contraseña son incorrectos.',
                [{ text: 'Entendido' }]
            );
            return;
        }

        Alert.alert(
            'Acceso correcto',
            'Bienvenido. Tus credenciales son válidas.',
            [
                { 
                    text: 'Continuar',
                    onPress: () => router.replace('/Home')
                }
            ]
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.screen}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
                <Header />
                <RegisterForm
                    correo={correo}
                    setCorreo={setCorreo}
                    contrasena={contrasena}
                    setContrasena={setContrasena}
                />
                
                <Buttonprin onPress={() => router.push('/register')} />

                <Buttonsec onPress={verificarAcceso} />

                <ButtonG onPress={() => {
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
                }} />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, padding: 20, gap: 16 },
});
