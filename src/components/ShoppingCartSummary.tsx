
import { Alert, Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useShopping } from '@/context/ShoppingContext';

export default function ShoppingCartSummary() {
  const { totalPoints, totalPrice, totalProducts } = useShopping();
  const insets = useSafeAreaInsets();

  if (totalProducts === 0) return null;

  const openCart = () => {
    Alert.alert(
      'Tu carrito',
      `${totalProducts} productos\n${totalPoints} puntos\nBs ${totalPrice}`
    );
  };

  return (
    <View style={[styles.container, {
      paddingBottom: Math.max(insets.bottom, 16),
    }]}>
      <View style={styles.summary}>
        <Text style={styles.points}>
          {totalPoints} puntos
        </Text>
        <Text style={styles.detail}>
          {totalPrice} bs
        </Text>
        <Text style={styles.detail}>
          {totalProducts} {totalProducts === 1 ? 'producto' : 'productos'}
        </Text>
      </View>

      <Pressable
        onPress={openCart}
        style={({ pressed }) => [
          styles.button,
          pressed && { opacity: 0.85 },
        ]}
        accessibilityRole="button"
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
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 18,
    gap: 18,
  },
  summary: {
    flex: 1,
  },
  points: {
    fontSize: 22,
    fontWeight: '700',
    color: '#000000',
    marginBottom: 2,
  },
  detail: {
    fontSize: 18,
    lineHeight: 23,
    color: '#111111',
  },
  button: {
    flex: 1.5,
    height: 56,
    borderRadius: 18,
    backgroundColor: '#155941',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 21,
    fontWeight: '600',
  },
});
