
import { MaterialIcons } from '@expo/vector-icons';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors } from '@/constants/colors';
import type { SustainableProduct } from '@/data/sustainableProducts';

type Props = {
  product: SustainableProduct;
  onClose: () => void;
};

export default function SustainableProductDetail({
  product,
  onClose,
}: Props) {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.closeButton}
        onPress={onClose}
        accessibilityLabel="Cerrar detalle del producto"
      >
        <MaterialIcons
          name="keyboard-arrow-up"
          size={42}
          color={colors.text}
        />
      </Pressable>

      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={product.image}
          style={styles.image}
        />

        <Text style={styles.title}>
          {product.name}
        </Text>

        {product.description.map((paragraph, index) => (
          <Text key={index} style={styles.description}>
            {paragraph}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.detailBackground,
  },
  scroll: {
    flex: 1,
  },
  closeButton: {
    alignSelf: 'flex-end',
    width: 56,
    height: 56,
    marginRight: 8,
    marginTop: 6,
    marginBottom: 8,
    borderWidth: 4,
    borderColor: colors.text,
    borderRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    paddingHorizontal: 35,
    paddingBottom: 40,
  },
  image: {
    width: '100%',
    aspectRatio: 1.33,
    borderRadius: 30,
    resizeMode: 'cover',
    marginBottom: 32,
  },
  title: {
    fontSize: 36,
    color: colors.text,
    marginBottom: 24,
  },
  description: {
    fontSize: 19,
    lineHeight: 28,
    color: colors.text,
    marginBottom: 32,
  },
});
