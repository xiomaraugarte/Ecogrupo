import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';

type LoginFormProps = {
    correo: string;
    setCorreo: (value: string) => void;
    contrasena: string;
    setContrasena: (value: string) => void;
};

export default function LoginForm({
    correo,
    setCorreo,
    contrasena,
    setContrasena,
}: LoginFormProps) {
    return (
        <View style={styles.container}>
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

            <TouchableOpacity style={styles.forgotPasswordButton} activeOpacity={0.7}>
                <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>
            </TouchableOpacity>
            
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
