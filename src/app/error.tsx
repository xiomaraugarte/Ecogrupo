import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Error() {
    const router = useRouter();

    useEffect(() => {

        const timer = setTimeout(() => {
            router.replace('/Home');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <View style={styles.container}>
            <MaterialIcons name="error-outline" size={72} color={colors.danger} style={styles.icon} />

            <Text style={styles.Title}>Error!</Text>

            <Text style={styles.Title}>Vuelva a intentarlo</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
    },
    icon: {
        marginBottom: 16,
    },
    Title: {
        fontFamily: 'Lemon',
        textAlign: 'center',
        fontSize: 32,
        color: colors.danger,
        marginBottom: 8,
    },
});