import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import EcoMap from '../../components/EcoMap';
import { colors } from '../../constants/colors';

export default function MapScreen() {
    return (
        <SafeAreaView style={styles.screen}>
            <EcoMap />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.background },
});