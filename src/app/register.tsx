import Buttonprin from "@/components/Button prin";
import ButtonG from "@/components/ButtonG";
import Buttonsec from "@/components/Buttonsec";
import Header from "@/components/Header";
import RegisterForm from "@/components/RegisterForm";
import { colors } from "@/constants/colors";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet } from "react-native";

export default function Register() {
    const [name, setName] = useState('');
    const [pais, setPais] = useState('');
    const [correo, setCorreo] = useState('');
    const [contrasenia, setContrasenia] = useState('');

    function verificarAcceso (){

    }

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
                <Buttonprin />
                <Buttonsec onPress={verificarAcceso} />
                <ButtonG />
                {/* COMPONENTS: add each one right above this line */}
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background },
    content: { flex: 1, padding: 20, gap: 16 },
});
