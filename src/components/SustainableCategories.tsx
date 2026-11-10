
import { colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';

export default function SustainableCategories() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Pressable
                style={styles.button}
                onPress={() => router.replace('/(tabs)/shopping')}
            >
                <Text style={styles.text}>
                    Canasta{'\n'}familiar
                </Text>
            </Pressable>

            <View style={[styles.button, styles.selected]}>
                <Text style={styles.text}>
                    Hogar{'\n'}sostenible
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 16,
        marginTop: 18,
    },
    button: {
        width: 91,
        height: 49,
        borderWidth: 1,
        borderColor: colors.sustainableBorder,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    selected: {
        backgroundColor: colors.sustainableSelected,
        borderWidth: 3,
    },
    text: {
        fontSize: 16,
        lineHeight: 18,
        textAlign: 'center',
        color: colors.text,
    },
});
