import MapView, { Marker } from 'react-native-maps';
import { StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

function FullMap() {
  const route = useRoute();
  const { lat, lng } = route.params;

  const region = {
    latitude: 1.287953,
    longitude: 103.851784,
    latitudeDelta: 0.38,
    longitudeDelta: 0.38,
  };

  const marker = {
    latitude: lat,
    longitude: lng,
  };
  return (
    <MapView style={styles.map} initialRegion={region}>
      <Marker title="Current Location" coordinate={marker} />
    </MapView>
  );
}

export default FullMap;

const styles = StyleSheet.create({
  map: {
    flex: 1,
  },
});
