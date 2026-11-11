import { colors } from '@/constants/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function SuccessHeader() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/images/Ecogrupo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      <View style={styles.titleRow}>
        <TouchableOpacity
          style={styles.homeButton}
          onPress={() => router.replace('/Home')}
        >
          <MaterialIcons name="home" size={32} color={colors.primary} />
        </TouchableOpacity>

        <Text style={styles.thanksTitle}>
          ¡Gracias por tu{'\n'}compra!
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingTop: 10,
    paddingHorizontal: 20,
  },
  logo: {
    width: 220,
    height: 50,
    marginBottom: 16,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'relative',
  },
  homeButton: {
    position: 'absolute',
    left: 10,
  },
  thanksTitle: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.black,
    textAlign: 'center',
    lineHeight: 32,
  },
});