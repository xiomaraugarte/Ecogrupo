import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

type ButtonprinProps = {
    onPress?: () => void;
};

export default function Buttonprin({ onPress }: ButtonprinProps) {
    return (
        <TouchableOpacity style={styles.button} activeOpacity={0.7} onPress={onPress}>
            <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
        
    );
}
const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        backgroundColor: colors.primary,
        borderRadius: 16,
        paddingVertical: 16,
    },
    buttonText: { fontSize: 16, fontWeight: 'bold', color: '#FFFFFF' },
});
