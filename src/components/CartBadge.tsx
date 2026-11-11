import { colors } from '@/constants/colors';
import { StyleSheet, Text, View } from 'react-native';

export default function CartBadge() {
    return (
        <View style={styles.badgeContainer}>
            <View style={styles.badge}>
                <Text style={styles.badgeText}>Retiro en el local</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    badgeContainer: {
        alignItems: 'center',
        marginVertical: 14,
    },
    badge: {
        backgroundColor: '#4A2810',
        paddingVertical: 6,
        paddingHorizontal: 24,
        borderRadius: 20,
    },
    badgeText: {
        color: colors.white,
        fontSize: 14,
        fontWeight: '500',
    },
});