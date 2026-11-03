import { StyleSheet, Text, TextInput, View } from 'react-native';
import { colors } from '../constants/colors';

type RegisterFormProps = {
    nombre: string;
    setNombre: (value: string) => void;
    pais: string;
    setPais: (value: string) => void;
    correo: string;
    setCorreo: (value: string) => void;
    contrasena: string;
    setContrasena: (value: string) => void;
};

export default function RegisterForm({
    nombre,
    setNombre,
    pais,
    setPais,
    correo,
    setCorreo,
    contrasena,
    setContrasena,
}: RegisterFormProps) {
    return (
        <View style={styles.container}>
            <View style={styles.inputGroup}>
                <Text style={styles.label}>Nombre</Text>
                <TextInput
                    style={styles.input}
                    placeholder="nombre"
                    placeholderTextColor={colors.textMuted}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={nombre}
                    onChangeText={setNombre}
                />
            </View>
             <View style={styles.inputGroup}>
                <Text style={styles.label}>País</Text>
                <TextInput
                    style={styles.input}
                    placeholder="pais"
                    placeholderTextColor={colors.textMuted}
                    autoCapitalize="none"
                    value={pais}
                    onChangeText={setPais}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Correo Electrónico</Text>
                <TextInput
                    style={styles.input}
                    placeholder="ejemplo@gmail.com"
                    placeholderTextColor={colors.textMuted}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    value={correo}
                    onChangeText={setCorreo}
                />
            </View>

            <View style={styles.inputGroup}>
                <Text style={styles.label}>Contraseña</Text>
                <TextInput
                    style={styles.input}
                    placeholder="****************"
                    placeholderTextColor={colors.textMuted}
                    secureTextEntry
                    value={contrasena}
                    onChangeText={setContrasena}
                />
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingVertical: 10,
        gap: 20,
    },
    inputGroup: { gap: 8, },
    label: { fontSize: 18, fontWeight: 'bold', color: '#000000', },
    input: {
        height: 52,
        borderWidth: 1.5,
        borderColor: colors.border,
        borderRadius: 26,
        paddingHorizontal: 20,
        fontSize: 16,
        color: colors.text,
        backgroundColor: 'transparent',
    },
    forgotPasswordButton: {
        alignSelf: 'flex-start',
        marginTop: 4,
        marginBottom: 30,
    },
    forgotPasswordText: {
        fontSize: 15,
        fontWeight: '600',
        color: colors.link,
    },
});
