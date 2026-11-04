/* import ButtonG from "@/components/ButtonG";
import Buttonprin from "@/components/Buttonprin";
import Buttonsec from "@/components/Buttonsec";
import Header from "@/components/Header";
import RegisterForm from "@/components/LoginForm";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router"; // 1. Importa el hook de navegación
import { useState } from "react";
import { Alert, KeyboardAvoidingView, ScrollView, StyleSheet } from "react-native";

export default function Login() {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const router = useRouter(); // 2. Inicializa el router

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

        // Aquí agregamos el router dentro del botón "Continuar" de la alerta
        Alert.alert(
            'Acceso correcto',
            'Bienvenido. Tus credenciales son válidas.',
            [
                { 
                    text: 'Continuar', 
                    onPress: () => router.replace('/Home') // Navega al Home al presionar Continuar
                }
            ]
        );
    };

    return (
        <KeyboardAvoidingView
            style={styles.screen}
        >
            <ScrollView contentContainerStyle={styles.content} keyboardShouldPersistTaps="handled">
                <Header />
                <RegisterForm
                    correo={correo}
                    setCorreo={setCorreo}
                    contrasena={contrasena}
                    setContrasena={setContrasena}
                />
                <Buttonprin />
                <Buttonsec onPress={verificarAcceso} />
                <ButtonG />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, padding: 20, gap: 16 },
});
*/

import ButtonG from "@/components/ButtonG";
import Buttonprin from "@/components/Buttonprin";
import Buttonsec from "@/components/Buttonsec";
import Header from "@/components/Header";
import RegisterForm from "@/components/LoginForm";
import { colors } from "@/constants/colors";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";

export default function Login() {
    const [correo, setCorreo] = useState('');
    const [contrasena, setContrasena] = useState('');
    const router = useRouter();

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

    // Función para ir a la pantalla de registro
    const irARegistro = () => {
        router.push('/register'); // Asegúrate de que coincida con el nombre de tu archivo src/app/Register.tsx
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
                {/* Le pasamos la función al botón de Registrarse */}
                <Buttonprin onPress={irARegistro} />
                <Buttonsec onPress={verificarAcceso} />
                <ButtonG />
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, padding: 20, gap: 16 },
});