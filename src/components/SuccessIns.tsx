import { colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SuccessInstructions() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.instructionText}>
        Pasa a tu punto de acopio más cercano a recoger tus productos y paga con tu método de pago favorito al recoger!
      </Text>

      <TouchableOpacity
        style={styles.mapButton}
        onPress={() => router.push('/map')}
        activeOpacity={0.8}
      >
        <Text style={styles.mapButtonText}>Ver mapa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  instructionText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 16,
  },
  mapButton: {
    backgroundColor: colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 36,
    borderRadius: 20,
  },
  mapButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});