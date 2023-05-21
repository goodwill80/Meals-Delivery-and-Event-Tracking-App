import React, { useState } from "react";
import { Button, Image, View, Platform, Text } from "react-native";
import * as ExpoImagePicker from "expo-image-picker";

function Event3DetailScreen() {
  const [image, setImage] = useState(null);

  const captureImage = async () => {
    // Make sure platform is not "web" before requesting camera permissions
    if (Platform.OS !== "web") {
      const { status } = await ExpoImagePicker.requestCameraPermissionsAsync();
      if (status !== "granted") {
        alert("Sorry, we need camera permissions to make this work!");
        return;
      }
    }

    // Launch the camera to capture an image
    let result = await ExpoImagePicker.launchCameraAsync({
      mediaTypes: ExpoImagePicker.MediaTypeOptions.All, // Allow capturing both images and videos
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result); // Log the result object to the console for debugging

    // If the user did not cancel the image capture, update the "image" state with the captured image URI
    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ textAlign: "center", marginTop: 50 }}>
        Welcome to Event 3 Detail!
      </Text>
      <Button title="Capture an image" onPress={captureImage} />
      {image && (
        <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
      )}
    </View>
  );
}

export default Event3DetailScreen;
