
import { Image, StyleSheet, Text, View } from 'react-native';

import { useShopping } from '@/context/ShoppingContext';
import { ShoppingProduct } from '@/data/shoppingProducts';
import ShoppingQuantityControl from './ShoppingQuantityControl';

interface Props {
  product: ShoppingProduct;
}

export default function ShoppingProductItem({ product }: Props) {
  const { quantities, increase, decrease } = useShopping();

  return (
    <View style={styles.container}>
      <Image
        source={product.image}
        style={styles.image}
        resizeMode="cover"
      />

      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>
          {product.description}
        </Text>

        <View style={styles.values}>
          <Text style={styles.bold}>
            {product.points} Puntos
          </Text>
          <Text style={styles.bold}>
            Bs {product.price}
          </Text>
        </View>
      </View>

      <View style={styles.control}>
        <ShoppingQuantityControl
          quantity={quantities[product.id] || 0}
          onIncrease={() => increase(product.id)}
          onDecrease={() => decrease(product.id)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  info: {
    flex: 1,
    minWidth: 0,
    justifyContent: 'center',
  },
  name: {
    fontSize: 16,
    lineHeight: 20,
    color: '#111111',
  },
  description: {
    fontSize: 12,
    lineHeight: 16,
    color: '#303030',
  },
  values: {
    marginTop: 5,
  },
  bold: {
    fontSize: 16,
    lineHeight: 19,
    fontWeight: '700',
    color: '#111111',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 80,
    marginBottom: 28,
    gap: 12,
  },
  image: {
    width: '26%',
    aspectRatio: 1.31,
    borderRadius: 20,
  },
  control: {
    width: '31%',
    justifyContent: 'center',
  },
});
