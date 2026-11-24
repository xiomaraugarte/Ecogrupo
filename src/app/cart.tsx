import CartBadge from '@/components/CartBadge';
import CartFooter from '@/components/CartFooter';
import CartHeader from '@/components/CartHeader';
import CartItemList from '@/components/CartItemList';

import { colors } from '@/constants/colors';
import { useShopping } from '@/context/ShoppingContext';

import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CartScreen() {
  const {
    items,
    increase,
    decrease,
    remove,
    totalPrice,
    totalPoints,
  } = useShopping();

  const handleQuantityChange = (id: string, delta: number) => {
    if (delta > 0) {
      increase(id);
    } else if (delta < 0) {
      decrease(id);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CartHeader />

      {items.length > 0 ? (
        <>
          <CartBadge />

          <CartItemList
            items={items}
            onRemoveItem={remove}
            onQuantityChange={handleQuantityChange}
          />

          <CartFooter
            totalBs={totalPrice}
            totalPoints={totalPoints}
          />
        </>
      ) : (
        <View style={styles.emptyContainer}>
          <MaterialIcons
            name="shopping-cart"
            size={80}
            color={colors.primary}
          />

          <Text style={styles.emptyTitle}>
            Tu carrito está vacío
          </Text>

          <Text style={styles.emptyText}>
            No tienes ningún producto añadido al carrito
          </Text>
        </View>
      )}

      {/* COMPONENTS: add each one right above this line */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
    gap: 16,
  },
  emptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
  },
});