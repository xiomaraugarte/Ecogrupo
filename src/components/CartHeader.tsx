import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CartHeader() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../../assets/images/Ecogrupo.png')} 
                    style={styles.logoImage}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.bottomRow}>
                <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                    <MaterialIcons name="arrow-back" size={24} color={colors.primary} />
                </TouchableOpacity>

                <Text style={styles.screenTitle}>Carrito</Text>
                
                <View style={styles.rightSpacer} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        paddingHorizontal: 20,
        paddingTop: Platform.OS === 'android' ? (StatusBar.currentHeight || 24) + 10 : 50,
        paddingBottom: 10,
        backgroundColor: colors.background,
    },
    logoContainer: {
        width: '100%',
        alignItems: 'center',
        marginBottom: 10,
    },
    logoImage: {
        width: '100%',
        height: 60,
    },
    bottomRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    backButton: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
    },
    screenTitle: {
        fontSize: 26,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
    },
    rightSpacer: {
        width: 40,
    },
});