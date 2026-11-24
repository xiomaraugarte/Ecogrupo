import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ShoppingHeader from '@/components/ShoppingHeader';
import SustainableCartSummary from '@/components/SustainableCartSummary';
import SustainableCategories from '@/components/SustainableCategories';
import SustainableProductDetail from '@/components/SustainableProductDetail';
import SustainableProductList from '@/components/SustainableProductList';

import { colors } from '@/constants/colors';
import { useShopping } from '@/context/ShoppingContext';
import type { SustainableProduct } from '@/data/sustainableProducts';

export default function SustainableHome() {
  const router = useRouter();

  const [selectedProduct, setSelectedProduct] =
    useState<SustainableProduct | null>(null);

  const {
    quantities,
    increase,
    decrease,
    totalProducts,
  } = useShopping();

  const viewCart = () => {
    if (totalProducts === 0) {
      Alert.alert(
        'Carrito vacío',
        'No tienes ningún producto añadido al carrito',
        [{ text: 'Aceptar' }]
      );
      return;
    }

    router.push('/cart');
  };

  return (
    <SafeAreaView
      style={styles.container}
      edges={['top']}
    >
      {selectedProduct ? (
        <SustainableProductDetail
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      ) : (
        <>
          <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <ShoppingHeader />

            <SustainableCategories />

            <Text style={styles.description}>
              Compra a precio especial todo lo que necesitas
              para un hogar amigable con el medio ambiente!
            </Text>

            <SustainableProductList
              quantities={quantities}
              onIncrease={increase}
              onDecrease={decrease}
              onSelect={setSelectedProduct}
            />
          </ScrollView>

          <SustainableCartSummary onViewCart={viewCart} />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  scroll: {
    flex: 1,
  },

  content: {
    paddingHorizontal: 16,
    paddingBottom: 45,
  },

  description: {
    fontSize: 16,
    lineHeight: 22,
    color: colors.text,
    textAlign: 'center',
    marginTop: 34,
    marginBottom: 40,
  },
});