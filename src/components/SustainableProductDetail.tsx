
import { colors } from '@/constants/colors';
import type { SustainableProduct } from '@/data/sustainableProducts';
import { MaterialIcons } from '@expo/vector-icons';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

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
            <Pressable style={styles.closeButton} onPress={onClose}>
                <MaterialIcons
                    name="keyboard-arrow-up"
                    size={42}
                    color={colors.text}
                />
            </Pressable>

            <ScrollView
                contentContainerStyle={styles.content}
                showsVerticalScrollIndicator={false}
            >
                <Image source={product.image} style={styles.image} />

                <Text style={styles.title}>{product.name}</Text>

                {product.description.map((text, index) => (
                    <Text key={index} style={styles.description}>
                        {text}
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
