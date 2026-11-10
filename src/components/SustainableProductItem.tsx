
import { MaterialIcons } from '@expo/vector-icons';
import {
    Image,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors } from '@/constants/colors';
import type { SustainableProduct } from '@/data/sustainableProducts';

type Props = {
  product: SustainableProduct;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
  onViewMore: () => void;
};

export default function SustainableProductItem({
  product,
  quantity,
  onIncrease,
  onDecrease,
  onViewMore,
}: Props) {
  return (
    <View style={styles.container}>
      <Image source={product.image} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.price}>{product.priceLabel}</Text>

        <Pressable style={styles.moreButton} onPress={onViewMore}>
          <Text style={styles.moreText}>Ver más</Text>

          <MaterialIcons
            name="keyboard-arrow-down"
            size={22}
            color={colors.text}
          />
        </Pressable>
      </View>

      <View style={styles.quantityContainer}>
        {quantity === 0 ? (
          <Pressable onPress={onIncrease}>
            <MaterialIcons
              name="add"
              size={48}
              color={colors.text}
            />
          </Pressable>
        ) : (
          <View style={styles.quantityControl}>
            <Pressable onPress={onDecrease}>
              <MaterialIcons
                name={quantity === 1 ? 'delete-outline' : 'remove'}
                size={20}
                color={colors.text}
              />
            </Pressable>

            <Text style={styles.quantity}>{quantity}</Text>

            <Pressable onPress={onIncrease}>
              <MaterialIcons
                name="add"
                size={21}
                color={colors.text}
              />
            </Pressable>
          </View>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 44,
  },
  image: {
    width: 92,
    height: 82,
    borderRadius: 17,
    resizeMode: 'cover',
  },
  info: {
    flex: 1,
    minWidth: 0,
  },
  name: {
    fontSize: 16,
    color: colors.text,
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  moreButton: {
    height: 45,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 7,
    marginTop: 15,
  },
  moreText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.text,
  },
  quantityContainer: {
    width: 82,
    alignItems: 'center',
    justifyContent: 'center',
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.controlBackground,
    borderRadius: 15,
    paddingHorizontal: 5,
    paddingVertical: 9,
    gap: 5,
  },
  quantity: {
    fontSize: 15,
    color: colors.text,
    minWidth: 12,
    textAlign: 'center',
  },
});
