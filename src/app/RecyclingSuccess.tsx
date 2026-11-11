
import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '@/constants/colors';

export default function RecyclingSuccess() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.back();
    }, 2000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.illustrationContainer}>
        <Image
          source={require('../../assets/images/exito.png')}
          style={styles.illustration}
          resizeMode="contain"
        />
      </View>

      <Text style={styles.title}>
        ¡Reciclaje{'\n'}completado!
      </Text>

      <Text style={styles.points}>
        ¡Ganó 25 puntos!
      </Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  illustrationContainer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 36,
  },
  illustration: {
    width: '100%',
    maxWidth: 310,
    aspectRatio: 1,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    lineHeight: 43,
    marginBottom: 90,
  },
  points: {
    fontSize: 30,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
});
