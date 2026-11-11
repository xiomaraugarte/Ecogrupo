
import { MaterialIcons } from '@expo/vector-icons';
import {
    Modal,
    Pressable,
    StyleSheet,
    Text,
    View,
} from 'react-native';

import { colors } from '@/constants/colors';

type RecyclingPointsModalProps = {
  visible: boolean;
  onClose: () => void;
};

const bottlePoints = [
  { size: '300 ml', points: '+ 1 puntos' },
  { size: '500 ml', points: '+ 2 puntos' },
  { size: '1 litro', points: '+ 3 puntos' },
  { size: '2 y 3 litros', points: '+ 5 puntos' },
  { size: '5 litros', points: '+ 10 puntos' },
];

export default function RecyclingPointsModal({
  visible,
  onClose,
}: RecyclingPointsModalProps) {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.frame}>
          <View style={styles.container}>

            <Pressable
              style={styles.closeButton}
              onPress={onClose}
              accessibilityRole="button"
              accessibilityLabel="Cerrar"
            >
              <MaterialIcons
                name="close"
                size={42}
                color={colors.white}
              />
            </Pressable>

            <View style={styles.header}>
              <MaterialIcons
                name="recycling"
                size={80}
                color={colors.white}
              />

              <Text style={styles.title}>
                ¡Mira cuántos puntos puedes ganar!
              </Text>
            </View>

            <Text style={styles.description}>
              Cada botella suma puntos según su tamaño.
            </Text>

            <View style={styles.table}>
              <View style={styles.tableHeader}>
                <Text
                  style={[
                    styles.headerText,
                    styles.leftCell,
                  ]}
                >
                  Botella
                </Text>

                <Text style={styles.headerText}>
                  Puntos
                </Text>
              </View>

              {bottlePoints.map((bottle, index) => (
                <View
                  key={bottle.size}
                  style={[
                    styles.tableRow,
                    index === bottlePoints.length - 1 &&
                      styles.lastRow,
                  ]}
                >
                  <Text
                    style={[
                      styles.cellText,
                      styles.leftCell,
                    ]}
                  >
                    {bottle.size}
                  </Text>

                  <Text style={styles.cellText}>
                    {bottle.points}
                  </Text>
                </View>
              ))}
            </View>

          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)',
    justifyContent: 'center',
    paddingHorizontal: 12,
  },

  frame: {
    backgroundColor: '#F3F8EF',
    borderRadius: 40,
    padding: 12,
  },

  container: {
    backgroundColor: colors.recyclingCard,
    borderRadius: 48,
    paddingHorizontal: 24,
    paddingTop: 90,
    paddingBottom: 30,
  },

  closeButton: {
    position: 'absolute',
    top: 25,
    right: 25,
    zIndex: 1,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 16,
  },

  title: {
    flex: 1,
    color: colors.white,
    fontSize: 29,
    fontWeight: 'bold',
    lineHeight: 34,
  },

  description: {
    color: colors.white,
    fontSize: 22,
    lineHeight: 29,
    marginBottom: 24,
  },

  table: {
    width: '100%',
  },

  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: colors.white,
  },

  headerText: {
    flex: 1,
    color: colors.white,
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 10,
  },

  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 3,
    borderBottomColor: colors.white,
    minHeight: 49,
    alignItems: 'center',
  },

  lastRow: {
    borderBottomWidth: 0,
  },

  cellText: {
    flex: 1,
    color: colors.white,
    fontSize: 21,
    textAlign: 'center',
    paddingVertical: 8,
  },

  leftCell: {
    borderRightWidth: 3,
    borderRightColor: colors.white,
  },
});
