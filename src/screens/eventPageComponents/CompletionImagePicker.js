import React, { useState } from 'react';
import { useGlobalEventsContext } from '../../../Store/context/events-context';
import {
  Image,
  View,
  Platform,
  Text,
  StyleSheet,
  Button,
  TextInput,
} from 'react-native';
import IconButton from '../../Components/IconButton';
import * as ExpoImagePicker from 'expo-image-picker';
import { useNavigation } from '@react-navigation/native';

function CompletionImagePicker({ event, volunteerId }) {
  const navigation = useNavigation();
  const { completeEvent } = useGlobalEventsContext();
  const [image, setImage] = useState(null);
  const [remarks, setRemarks] = useState('');

  // OnChange for InputText
  const handleChangeRemarksText = (e) => {
    setRemarks(e);
  };

  // Submit handler for completion
  const submitCompletionOfEvent = () => {
    completeEvent(volunteerId, event.id, image ? image : '', remarks);
    navigation.navigate('Upcoming Events');
  };

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

  let imagePreview = (
    <Image
      style={styles.image}
      source={{
        uri: 'https://cdn.britannica.com/67/92867-050-BC3DC984/cameras-camera-reviews-crystal-displays-photographs-film.jpg',
      }}
    />
  );

  if (image) {
    imagePreview = <Image style={styles.image} source={{ uri: image }} />;
  }

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
      }}
    >
      <Text style={styles.title}>Steps to Complete Event</Text>
      <Text>(Please take a photo of the event venue)</Text>
      <View style={styles.imagePreview}>{imagePreview}</View>
      <View style={styles.buttonsContainer}>
        <IconButton
          text="Camera"
          icon="camera"
          color={'white'}
          onPress={captureImage}
          bgColor="#0000FF"
        />
        <IconButton
          text="Upload"
          icon="md-briefcase-sharp"
          color={'white'}
          onPress={pickImage}
          bgColor="#0000FF"
        />
        <IconButton
          text="Clear"
          icon="md-play-skip-back-circle-sharp"
          color={'white'}
          onPress={() => setImage(null)}
          bgColor="#0000FF"
        />
      </View>
      <View style={styles.remarksContainer}>
        <TextInput
          value={remarks}
          onChangeText={handleChangeRemarksText}
          placeholder="Help us to improve by providing your comments, if any."
          style={styles.remarksInput}
          multiline={true}
          numberOfLines={4}
        />
      </View>
      <View style={styles.completionBtn}>
        <Button
          onPress={submitCompletionOfEvent}
          title="Complete event"
          bgColor="#0000FF"
        />
      </View>
    </View>
  );
}

export default CompletionImagePicker;

const styles = StyleSheet.create({
  imagePreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    overflow: 'hidden',
    padding: 8,
  },
  image: {
    width: '100%',
    height: '100%',
    opacity: 0.8,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  noImageText: {
    textAlign: 'center',
    color: 'black',
  },
  title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'limegreen',
    marginVertical: 12,
  },
  remarksContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: '100%',
  },
  remarksInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    width: '100%',
    height: 60,
  },
  completionBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#2a52be',
    borderRadius: 10,
    backgroundColor: '#2a52be',
    width: '100%',
  },
});
