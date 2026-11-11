
import { colors } from '@/constants/colors';
import { useRouter } from 'expo-router';
import { useEffect, useRef } from 'react';
import {
    Animated,
    Image,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StreakSuccess() {
  const router = useRouter();
  const scale = useRef(new Animated.Value(0.5)).current;
  const opacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.spring(scale, {
        toValue: 1,
        friction: 5,
        tension: 65,
        useNativeDriver: true,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
      }),
    ]).start();

    const timer = setTimeout(() => {
      router.back();
    }, 2000);

    return () => clearTimeout(timer);
  }, [scale, opacity, router]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Animated.View
          style={{
            opacity,
            transform: [{ scale }],
          }}
        >
          <Image
            source={require('../../assets/images/rachi.png')}
            style={styles.character}
            resizeMode="contain"
          />
        </Animated.View>

        <Text style={styles.title}>
          ¡Racha{'\n'}activada!
        </Text>

        <Text style={styles.description}>
          ¡Llevas 12 Semanas de{'\n'}Racha!
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingBottom: 60,
  },
  character: {
    width: 230,
    height: 260,
    marginBottom: 16,
  },
  title: {
    fontSize: 32,
    fontWeight: '900',
    fontStyle: 'italic',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 36,
    marginBottom: 20,
  },
  description: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#000000',
    textAlign: 'center',
    lineHeight: 25,
  },
});
