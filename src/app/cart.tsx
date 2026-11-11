import CartBadge from '@/components/CartBadge';
import CartFooter from '@/components/CartFooter';
import CartHeader from '@/components/CartHeader';
import CartItemList, { CartItem } from '@/components/CartItemList';
import { colors } from '@/constants/colors';
import { useState } from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const INITIAL_ITEMS: CartItem[] = [
  {
    id: '1',
    name: 'Tomate',
    price: 8,
    points: 20,
    quantity: 1,
    image: require('../../assets/images/tomate.png'),
  },
  {
    id: '2',
    name: 'Lechuga',
    price: 8,
    points: 20,
    quantity: 1,
    image: require('../../assets/images/lechuga.png'),
  },
  {
    id: '3',
    name: 'Pimentón',
    price: 14,
    points: 35,
    quantity: 1,
    image: require('../../assets/images/pimenton.png'),
  },
];

export default function CartScreen() {
  const [items, setItems] = useState<CartItem[]>(INITIAL_ITEMS);

  const handleRemoveItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id: string, delta: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + delta;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  const totalBs = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalPoints = items.reduce((sum, item) => sum + item.points * item.quantity, 0);

  return (
    <SafeAreaView style={styles.container}>
      <CartHeader />
      <CartBadge />
      <CartItemList
        items={items}
        onRemoveItem={handleRemoveItem}
        onQuantityChange={handleQuantityChange}
      />
      <CartFooter totalBs={totalBs} totalPoints={totalPoints} />
      {/* COMPONENTS: add each one right above this line */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background || '#F9F9F9',
  },
});