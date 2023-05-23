import { useState, useEffect } from 'react';
import {
  Alert,
  StyleSheet,
  View,
  Image,
  Text,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import OutlinedButton from '../../Components/OutlineButton';
import { useNavigation } from '@react-navigation/native';
import * as WebBrowser from 'expo-web-browser';

import {
  getCurrentPositionAsync,
  useForegroundPermissions,
  PermissionStatus,
} from 'expo-location';
import { getMapPreview, getMapSample } from '../eventUtil/GoogleMapLoader';

function LocationMap({ address }) {
  const navigation = useNavigation();
  const [pickedLocation, setPickedLocation] = useState(null);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(null);
  const [mode, setMode] = useState(null);

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
    setLoading(true);
    const hasPermission = await verifyPermission();
    if (!hasPermission) {
      setLoading(false);
      return;
    }
    const location = await getCurrentPositionAsync();
    setPickedLocation({
      lat: location.coords.latitude,
      lng: location.coords.longitude,
    });
  };

  useEffect(() => {
    if (pickedLocation) {
      setLoading(false);
    }
  }, [pickedLocation]);

  // Open Full Map Handler
  const openFullMap = () => {
    navigation.navigate('Map View', {
      lat: pickedLocation ? pickedLocation.lat : '',
      lng: pickedLocation ? pickedLocation.lng : '',
    });
  };

  // Navigate to Event Handler
  const navigateToLocation = async () => {
    let result = await WebBrowser.openBrowserAsync(
      `https://www.google.com/maps/dir/?api=1&origin=${pickedLocation.lat},${
        pickedLocation.lng
      }&destination=${address}+singapore&travelmode=${mode ? mode : 'driving'}`
    );
    setResult(result);
  };

  let locationPreview = (
    <Image
      style={styles.image}
      source={{
        uri: getMapSample(),
      }}
    />
  );

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

      <View style={styles.radioContainer}>
        <View style={styles.singleRadioBtnContainer}>
          <TouchableOpacity
            onPress={() => setMode('driving')}
            style={styles.radioBtn}
          >
            <View style={mode === 'driving' ? styles.radioInner : null} />
          </TouchableOpacity>
          <Text>Driving</Text>
        </View>

        <View style={styles.singleRadioBtnContainer}>
          <TouchableOpacity
            onPress={() => setMode('walking')}
            style={styles.radioBtn}
          >
            <View style={mode === 'walking' ? styles.radioInner : null} />
          </TouchableOpacity>
          <Text>Walking</Text>
        </View>

        <View style={styles.singleRadioBtnContainer}>
          <TouchableOpacity
            onPress={() => setMode('transit')}
            style={styles.radioBtn}
          >
            <View style={mode === 'transit' ? styles.radioInner : null} />
          </TouchableOpacity>
          <Text>Public</Text>
        </View>
      </View>

      <Pressable
        onPress={openFullMap}
        style={({ pressed }) => [pressed && styles.pressed]}
      >
        <View style={styles.mapPreview}>{locationPreview}</View>
      </Pressable>
      <View styles={styles.actions}>
        <OutlinedButton
          onPress={getLocationHandler}
          icon="location"
          color={`${loading ? 'red' : '#1F75FE'}`}
        >
          {loading ? 'Loading...' : 'Load current location'}
        </OutlinedButton>
        {pickedLocation && (
          <OutlinedButton
            onPress={navigateToLocation}
            icon="location"
            color="#1F75FE"
          >
            Navigate
          </OutlinedButton>
        )}
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
    backgroundColor: 'lightblue',

    borderRadius: 4,
    overflow: 'hidden',
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
    color: '#3457D5',
  },
  radioContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    marginVertical: 10,
  },
  singleRadioBtnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
  },
  radioBtn: {
    width: 25,
    height: 25,
    borderWidth: 1,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioInner: {
    width: 15,
    height: 15,
    backgroundColor: '#1F75FE',
    borderRadius: 10,
  },
  pressed: {
    opacity: 0.7,
  },
});
