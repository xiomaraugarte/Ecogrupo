import { Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { colors } from '../constants/colors';

interface ButtonGProps {
    onPress?: () => void;
}

export default function ButtonG({ onPress }: ButtonGProps) {
    return (
        <TouchableOpacity 
            style={styles.button} 
            activeOpacity={0.7}
            onPress={onPress}
        >
            <Image 
                source={require('../../assets/images/Google.jpg')} 
                style={styles.img}
                resizeMode="contain"
            />
            <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        borderColor: colors.border,
        borderWidth: 4,
        borderRadius: 16,
        paddingVertical: 12,
    },
    buttonText: { fontSize: 16, fontWeight: 'bold', color: colors.text },
    img: { width: 24, height: 24 },
});