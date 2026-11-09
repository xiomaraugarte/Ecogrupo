import Buttonprin from "@/components/Buttonprin";
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";
import { colors } from "@/constants/colors";
import { router } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";

export default function Register() {
    const [name, setName] = useState('');
    const [pais, setPais] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    const registrarUsuario = () => {
        // Validar que los campos principales no estén vacíos
        if (!name.trim() || !correo.trim() || !contrasenia.trim()) {
            Alert.alert(
                'Campos incompletos',
                'Por favor, completa tu nombre, correo y contraseña.',
                [{ text: 'Entendido' }]
            );
            return;
        }

        // Alerta de confirmación antes de ir a Home
        Alert.alert(
            '¡Registro exitoso!',
            'Bienvenido a EcoGrupo. Tu cuenta ha sido creada.',
            [
                {
                    text: 'Continuar',
                    onPress: () => router.replace('/Home'), // 3. Navegar a /Home al presionar Continuar
                },
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
                    nombre={name}
                    setNombre={setName}
                    pais={pais}
                    setPais={setPais}
                    correo={correo}
                    setCorreo={setCorreo}
                    contrasena={contrasenia}
                    setContrasena={setContrasenia}
                />
                <Buttonprin onPress={registrarUsuario}/>

                {/* COMPONENTS: add each one right above this line */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, padding: 20, gap: 16 },
});
