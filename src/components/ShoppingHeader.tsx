
import { MaterialIcons } from '@expo/vector-icons';
import { Alert, Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function ShoppingHeader() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Ecogrupo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.titleRow}>
        <Text style={styles.title}>
          Todo lo que necesitas en{'\n'}un solo lugar
        </Text>

        <Pressable
          style={styles.cartButton}
          onPress={() => Alert.alert('Carrito', 'Abre el resumen de tu compra')}
          accessibilityRole="button"
          accessibilityLabel="Abrir carrito"
        >
          <MaterialIcons
            name="shopping-cart"
            size={33}
            color="#FFFFFF"
          />
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 14,
  },
  logo: {
    width: 240,
    height: 53,
    alignSelf: 'center',
    marginBottom: 28,
  },
  titleRow: {
    minHeight: 66,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    flex: 1,
    fontSize: 24,
    lineHeight: 29,
    fontWeight: '700',
    color: '#080808',
    textAlign: 'center',
    paddingRight: 5,
  },
  cartButton: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#6A9E32',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5,
    marginRight: 8,
  },
});
