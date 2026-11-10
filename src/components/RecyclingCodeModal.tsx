
import { colors } from '@/constants/colors';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Keyboard,
    Modal,
    Pressable,
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  onAccept: () => void;
};

export default function RecyclingCodeModal({
  visible,
  onClose,
  onAccept,
}: Props) {
  const [code, setCode] = useState('');

  const handleAccept = () => {
    if (code.trim() === '') {
      return;
    }

    Keyboard.dismiss();
    setCode('');
    onAccept();
  };

  const handleClose = () => {
    setCode('');
    onClose();
  };

  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <Pressable
            style={styles.closeButton}
            onPress={handleClose}
            accessibilityLabel="Cerrar"
          >
            <MaterialIcons
              name="close"
              size={32}
              color={colors.text}
            />
          </Pressable>

          <Text style={styles.title}>
            Registrar el código
          </Text>

          <Text style={styles.description}>
            Introduzca el código que sale en la
            {'\n'}maquina abajo
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Introduzca el código aquí"
            placeholderTextColor={colors.textMuted}
            value={code}
            onChangeText={setCode}
            autoCapitalize="none"
          />

          <Pressable
            style={styles.acceptButton}
            onPress={handleAccept}
          >
            <Text style={styles.acceptText}>
              Aceptar
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: colors.recyclingOverlay,
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  modal: {
    backgroundColor: colors.recyclingModalBackground,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 18,
    paddingHorizontal: 32,
    paddingTop: 46,
    paddingBottom: 44,
    minHeight: 370,
  },
  closeButton: {
    position: 'absolute',
    right: 12,
    top: 10,
    padding: 4,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 16,
  },
  description: {
    fontSize: 19,
    lineHeight: 25,
    color: colors.text,
    marginBottom: 20,
  },
  input: {
    height: 58,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 16,
    paddingHorizontal: 14,
    fontSize: 16,
    color: colors.text,
  },
  acceptButton: {
    backgroundColor: colors.recyclingButton,
    borderRadius: 17,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 34,
    alignSelf: 'center',
    width: '55%',
  },
  acceptText: {
    fontSize: 21,
    fontWeight: '600',
    color: colors.white,
  },
});
