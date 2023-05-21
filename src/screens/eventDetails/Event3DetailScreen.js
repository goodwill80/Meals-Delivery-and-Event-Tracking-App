import React, { useState } from 'react';
import { Image, View, Platform, Text, StyleSheet } from 'react-native';
import IconButton from '../../Components/IconButton';
import * as ExpoImagePicker from 'expo-image-picker';

function Event3DetailScreen() {
  const [image, setImage] = useState(null);

  const captureImage = async () => {
    // Make sure platform is not "web" before requesting camera permissions
    if (Platform.OS !== 'web') {
      const { status } = await ExpoImagePicker.requestCameraPermissionsAsync();
      if (status !== 'granted') {
        alert('Sorry, we need camera permissions to make this work!');
        return;
      }
    }
    // Launch the camera to capture an image
    let result = await ExpoImagePicker.launchCameraAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All, // Allow capturing both images and videos
      aspect: [16, 9],
      quality: 0.5,
      allowsEditing: true,
    });

    console.log(result); // Log the result object to the console for debugging

    // If the user did not cancel the image capture, update the "image" state with the captured image URI
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ExpoImagePicker.launchImageLibraryAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  let imagePreview = <Text>Take an image upon completion of event</Text>;

  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image }} />;
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ textAlign: 'center', marginTop: 50, marginBottom: 20 }}>
        Welcome to Event 3 Detail!
      </Text>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <View style={styles.buttonsContainer}>
        <IconButton
          text="Camera"
          icon="camera"
          color={'white'}
          onPress={captureImage}
        />
        <IconButton
          text="Upload"
          icon="md-briefcase-sharp"
          color={'white'}
          onPress={pickImage}
        />
      </View>
    </View>
  );
}

export default Event3DetailScreen;

const styles = StyleSheet.create({
  imagePreview: {
    width: 200,
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'lightgray',
    borderRadius: 4,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
