import { colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface CartFooterProps {
  totalBs: number;
  totalPoints: number;
}

export default function CartFooter({ totalBs, totalPoints }: CartFooterProps) {
  const router = useRouter();

  return (
    <View style={styles.footer}>
      <View style={styles.totalRow}>
        <Text style={styles.totalLabel}>Total</Text>
        <Text style={styles.totalBsText}>{totalBs} Bs.</Text>
      </View>
      <Text style={styles.totalPointsText}>{totalPoints} Puntos</Text>

      <TouchableOpacity
        style={styles.payButton}
        onPress={() => router.push('/loading')}
        activeOpacity={0.8}
      >
        <Text style={styles.payButtonText}>Ir a pagar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },
  totalBsText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
  },
  totalPointsText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'right',
    marginTop: 4,
    marginBottom: 16,
  },
  payButton: {
    backgroundColor: colors.primary,
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  payButtonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
});