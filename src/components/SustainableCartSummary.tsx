
import {
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors } from '@/constants/colors';
import { sustainableProducts } from '@/data/sustainableProducts';

type Props = {
  quantities: Record<string, number>;
  onViewCart: () => void;
};

export default function SustainableCartSummary({
  quantities,
  onViewCart,
}: Props) {
  let totalPrice = 0;
  let totalProducts = 0;

  sustainableProducts.forEach(product => {
    const quantity = quantities[product.id] || 0;

    totalPrice += product.price * quantity;
    totalProducts += quantity;
  });

  if (totalProducts === 0) {
    return null;
  }

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.total}>{totalPrice} Bs</Text>

        <Text style={styles.count}>
          {totalProducts}{' '}
          {totalProducts === 1 ? 'producto' : 'productos'}
        </Text>
      </View>

      <Pressable
        style={styles.button}
        onPress={onViewCart}
      >
        <Text style={styles.buttonText}>
          Ver carrito
        </Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 16,
    backgroundColor: colors.background,
  },
  summary: {
    flex: 1,
  },
  total: {
    fontSize: 18,
    color: colors.text,
  },
  count: {
    fontSize: 16,
    color: colors.text,
  },
  button: {
    backgroundColor: colors.primary,
    borderRadius: 15,
    paddingVertical: 14,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
  },
});
