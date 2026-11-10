
import { StyleSheet, Text, View } from 'react-native';

export default function ShoppingDescription() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Si te faltan puntos, no te preocupes!{'\n'}
        Puedes comprar lo que necesitas al mejor precio
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 18,
    marginBottom: 26,
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    color: '#101010',
    textAlign: 'center',
  },
});
