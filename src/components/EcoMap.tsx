import { StyleSheet, View } from 'react-native';
import MapView, { Marker, UrlTile } from 'react-native-maps';
import { colors } from '../constants/colors';
import { PLACES } from '../constants/places';

const COCHABAMBA = {
    latitude: -17.3935,
    longitude: -66.157,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
};

export default function EcoMap() {
    return (
        <View style={styles.container}>
            <MapView 
                style={styles.map} 
                initialRegion={COCHABAMBA}
                mapType="none"
            >
                <UrlTile
                    urlTemplate="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    maximumZ={19}
                />
                {PLACES.map((place) => (
                    <Marker
                        key={place.id}
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                        title={place.name}
                        description={place.description}
                        pinColor={colors.primary}
                    />
                ))}
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: '100%',
        height: '100%',
    },
});