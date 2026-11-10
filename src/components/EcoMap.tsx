import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colors } from '../constants/colors';
import { Place, PLACES } from '../constants/places';

export default function EcoMap() {
  const [selected, setSelected] = useState<Place | null>(null);

  return (
    <View style={styles.container}>
      {/* Imagen base del mapa */}
      <Image
        source={require('../../assets/images/Mapa.png')}
        style={styles.map}
        resizeMode="cover"
      />

      {/* Marcadores de reciclaje en el mapa */}
      {PLACES.map((place) => (
        <TouchableOpacity
          key={place.id}
          style={[
            styles.markerContainer,
            { left: `${place.xPercent}%`, top: `${place.yPercent}%` },
          ]}
          onPress={() => setSelected(place)}
          activeOpacity={0.7}
        >
          <MaterialIcons name="recycling" size={38} color={colors.primary} />
        </TouchableOpacity>
      ))}

      {/* Popup emergente según el diseño de Figma */}
      {selected && (
        <View style={styles.card}>
          {/* Encabezado con Ícono, Título y Botón de cerrar */}
          <View style={styles.cardHeader}>
            <View style={styles.headerLeft}>
              <MaterialIcons name="recycling" size={32} color={colors.primarySoft} />
              <Text style={styles.cardTitle}>{selected.name}</Text>
            </View>
            <TouchableOpacity 
              onPress={() => setSelected(null)}
              hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
            >
              <MaterialIcons name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>

          {/* Dirección */}
          <Text style={styles.addressText}>{selected.address}</Text>

          {/* Distancia */}
          <Text style={styles.distanceText}>{selected.distance}</Text>

          {/* Sección de Materiales Aceptados */}
          <View style={styles.materialsContainer}>
            <Text style={styles.materialsTitle}>Materiales aceptados</Text>
            <Text style={styles.materialsText}>{selected.materials}</Text>
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  markerContainer: {
    position: 'absolute',
    transform: [{ translateX: -19 }, { translateY: -19 }],
    zIndex: 2,
  },
  card: {
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 30,
    backgroundColor: colors.white,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1.5,
    borderColor: colors.highlight,
    alignItems: 'center',
    shadowColor: colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 6,
    zIndex: 10,
  },
  cardHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  headerLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.black,
  },
  addressText: {
    fontSize: 16,
    color: colors.text,
    textAlign: 'center',
    lineHeight: 22,
    marginBottom: 12,
  },
  distanceText: {
    fontSize: 15,
    color: colors.text,
    textAlign: 'center',
    marginBottom: 16,
  },
  materialsContainer: {
    alignItems: 'center',
  },
  materialsTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.black,
    marginBottom: 2,
  },
  materialsText: {
    fontSize: 14,
    color: colors.textMuted,
    textAlign: 'center',
  },
});