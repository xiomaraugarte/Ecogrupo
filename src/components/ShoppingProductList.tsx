
import { StyleSheet, View } from 'react-native';

import { shoppingProducts } from '@/data/shoppingProducts';
import ShoppingProductItem from './ShoppingProductItem';

export default function ShoppingProductList() {
  return (
    <View style={styles.container}>
      {shoppingProducts.map(product => (
        <ShoppingProductItem
          key={product.id}
          product={product}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
