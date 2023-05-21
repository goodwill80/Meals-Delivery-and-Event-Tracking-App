import { useState } from 'react';
import { Alert, StyleSheet, View, Image, Text } from 'react-native';
import OutlinedButton from '../../Components/OutlineButton';

import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';
import { getMapPreview } from './GoogleMapLoader';

function LocationMap() {
  const [pickedLocation, setPickedLocation] = useState();
  // Retrieve location funtions
  const [locationPermissionInformation, requestPermission] =
    useForegroundPermissions();
  // Function to verify location permission
  const verifyPermission = async () => {
    // a. Check if there is permission
    if (
      locationPermissionInformation.status === PermissionStatus.UNDETERMINED
    ) {
      const permissionResponse = await requestPermission();
      // Return a bollean - true or false
      return permissionResponse.granted;
    }
    // b. Chec if permission is rejected
    if (locationPermissionInformation.status === PermissionStatus.DENIED) {
      Alert.alert(
        'Insufficient Permissions!',
        'You need to grant location permissions to use this app!'
      );
      return false;
    }
    return true;
  };

  // Get location
  const getLocationHandler = async () => {
    const hasPermission = await verifyPermission();
    if (!hasPermission) return;
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
    console.log(location);
  };

  // Navigate to Event
  const navigateToLocation = () => {};

  let locationPreview = <Text>Load your current location on Map</Text>;

  if (pickedLocation) {
    locationPreview = (
      <Image
        style={styles.image}
        source={{
          uri: getMapPreview(pickedLocation.lat, pickedLocation.lng),
        }}
      />
    );
  }

  return (
    <View>
      <Text style={styles.title}>How to get there?</Text>
      <View style={styles.mapPreview}>{locationPreview}</View>
      <View styles={styles.actions}>
        <OutlinedButton onPress={getLocationHandler} icon="location">
          Load Current Location
        </OutlinedButton>
        <OutlinedButton onPress={navigateToLocation} icon="location">
          Navigate
        </OutlinedButton>
      </View>
    </View>
  );
}

export default LocationMap;

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 4,
    overflow: 'hidden',
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    // borderRadius: 4,
  },
  title: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
