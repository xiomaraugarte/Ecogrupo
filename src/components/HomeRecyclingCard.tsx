
import { MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { colors } from '@/constants/colors';
import RecyclingCodeModal from './RecyclingCodeModal';
import RecyclingPointsModal from './RecyclingPointsModal';

export default function HomeRecyclingCard() {
  const router = useRouter();

  const [codeModalVisible, setCodeModalVisible] = useState(false);
  const [pointsModalVisible, setPointsModalVisible] = useState(false);

  const handleAccept = () => {
    setCodeModalVisible(false);
    router.push('/RecyclingSuccess');
  };

  return (
    <>
      <View style={styles.container}>
        <View style={styles.top}>
          <MaterialIcons
            name="recycling"
            size={70}
            color={colors.white}
          />

          <View style={styles.textContainer}>
            <Text style={styles.title}>
              ¿Tienes algo para reciclar?
            </Text>

            <Text style={styles.description}>
              Registra tu reciclaje y sigue
              {'\n'}sumando puntos
            </Text>
          </View>
        </View>

        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => setCodeModalVisible(true)}
          >
            <Text style={styles.buttonText}>
              Registrar
            </Text>
          </Pressable>

          <Pressable
            style={styles.button}
            onPress={() => setPointsModalVisible(true)}
          >
            <Text style={styles.buttonText}>
              ¿Cuántos puntos
              {'\n'}puedo ganar?
            </Text>
          </Pressable>
        </View>
      </View>

      <RecyclingCodeModal
        visible={codeModalVisible}
        onClose={() => setCodeModalVisible(false)}
        onAccept={handleAccept}
      />

      <RecyclingPointsModal
        visible={pointsModalVisible}
        onClose={() => setPointsModalVisible(false)}
      />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.recyclingCard,
    borderRadius: 24,
    padding: 20,
    gap: 14,
  },

  top: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },

  textContainer: {
    flex: 1,
  },

  title: {
    color: colors.white,
    fontSize: 19,
    fontWeight: 'bold',
  },

  description: {
    color: colors.white,
    fontSize: 14,
  },

  buttons: {
    flexDirection: 'row',
    gap: 10,
  },

  button: {
    flex: 1,
    minHeight: 48,
    backgroundColor: colors.recyclingButton,
    borderRadius: 16,
    paddingHorizontal: 6,
    paddingVertical: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 15,
    fontWeight: 'bold',
  },
});
