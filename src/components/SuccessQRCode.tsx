import { colors } from '@/constants/colors';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function SuccessQRCode() {
    return (
        <View style={styles.container}>
            <Text style={styles.qrTitle}>Recoge escaneando este código</Text>
            <Image
                source={require('@/assets/images/qr-code.png')}
                style={styles.qrImage}
                resizeMode="contain"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 30,
    },
    qrTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
        marginBottom: 12,
    },
    qrImage: {
        width: 200,
        height: 200,
    },
});