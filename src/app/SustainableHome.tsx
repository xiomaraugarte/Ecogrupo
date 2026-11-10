
import { useState } from 'react';
import { ScrollView, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import ShoppingHeader from '../components/ShoppingHeader';
import SustainableCategories from '../components/SustainableCategories';
import SustainableProductDetail from '../components/SustainableProductDetail';
import SustainableProductList from '../components/SustainableProductList';

import { colors } from '../constants/colors';
import type { SustainableProduct } from '../data/sustainableProducts';

export default function SustainableHome() {
    const [selectedProduct, setSelectedProduct] =
        useState<SustainableProduct | null>(null);

    const [quantities, setQuantities] =
        useState<Record<string, number>>({});

    const increaseQuantity = (id: string) => {
        setQuantities(previous => ({
            ...previous,
            [id]: (previous[id] || 0) + 1,
        }));
    };

    const decreaseQuantity = (id: string) => {
        setQuantities(previous => ({
            ...previous,
            [id]: Math.max(0, (previous[id] || 0) - 1),
        }));
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            {selectedProduct ? (
                <SustainableProductDetail
                    product={selectedProduct}
                    onClose={() => setSelectedProduct(null)}
                />
            ) : (
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
                        onIncrease={increaseQuantity}
                        onDecrease={decreaseQuantity}
                        onSelect={setSelectedProduct}
                    />

                    {/* COMPONENTS: add each one right above this line */}
                </ScrollView>
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
