
import { MaterialIcons } from '@expo/vector-icons';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { theme } from '../constants/theme';

const wishlist = [
  {
    id: '1',
    name: 'Tomate',
    points: '40 puntos',
    image: require('../../assets/images/tomate.png'), 
  },
  {
    id: '2',
    name: 'Lechuga',
    points: '45 puntos',
    image: require('../../assets/images/lechuga.png'), 
  },
];

export default function ProfileWishlist() {
  return (
    <View style={styles.container}>
      <Text style={styles.subtitle}>
        ¡Mira todo lo que te falta comprar!
      </Text>

      <Text style={styles.title}>Lista de deseos</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.products}
      >
        {wishlist.map((item) => (
          <View key={item.id} style={styles.card}>
            <Image
              source={item.image}
              style={styles.productImage}
              resizeMode="cover"
            />

            <Text style={styles.name}>{item.name}</Text>

            <View style={styles.details}>
              <Text style={styles.points}>{item.points}</Text>

              <Pressable>
                <MaterialIcons
                  name="favorite"
                  size={theme.icon.xl}
                  color={theme.colors.heart}
                />
              </Pressable>
            </View>

            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>Comprar</Text>
            </Pressable>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.text.heading,
    fontWeight: '600',
    color: theme.colors.text,
  },
  title: {
    fontSize: theme.text.display,
    fontWeight: '900',
    color: theme.colors.text,
  },
  products: {
    paddingHorizontal: theme.spacing.xxl - theme.spacing.xs,
    paddingTop: theme.spacing.lg + theme.spacing.xs,
    paddingBottom: theme.spacing.md,
    gap: theme.spacing.sm,
  },
  card: {
    width: 228,
    padding: theme.spacing.sm + theme.spacing.xs,
    borderRadius: theme.radius.sm,
    borderWidth: 1,
    borderColor: theme.colors.border,
    backgroundColor: theme.colors.card,
    elevation: 4,
    shadowColor: theme.colors.black,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowOffset: { width: 2, height: 4 },
  },
  productImage: {
    width: '100%',
    height: 145,
    backgroundColor: theme.colors.productBackground,
  },
  name: {
    fontSize: theme.text.body,
    fontWeight: '700',
    color: theme.colors.text,
    marginTop: theme.spacing.xs,
  },
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  points: {
    fontSize: theme.text.small,
    color: theme.colors.text,
  },
  button: {
    height: 48,
    borderRadius: theme.radius.sm,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.xs,
  },
  buttonText: {
    color: theme.colors.white,
    fontSize: theme.text.body,
    fontWeight: '700',
  },
});
