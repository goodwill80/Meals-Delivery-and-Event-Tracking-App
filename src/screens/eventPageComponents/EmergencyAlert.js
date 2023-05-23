import { useState } from 'react';
import { View, StyleSheet, Text, TextInput, Button, Alert } from 'react-native';
import IconButton from '../../Components/IconButton';
import { useGlobalEventsContext } from '../../../Store/context/events-context';

function EmergencyAlert({ volunteer, event }) {
  const { setEmergencies } = useGlobalEventsContext;
  const [remarks, setRemarks] = useState(null);
  const [image, setImage] = useState(null);

  // OnChange for InputText
  const handleChangeRemarksText = (e) => {
    setRemarks(e);
  };

  // Submit Concern Handler
  const submitConcern = () => {
    if (!remarks) {
      alert('Please enter some remarks');
      return;
    }
    // setEmergencies(volunteer, event, remarks, image);
    alert('Thank you');
  };

  // *********** SDK Functions *********************

  // Capture Image
  const captureImage = () => {};

  // Pick Image
  const pickImage = () => {};

  return (
    <View style={styles.rootContainer}>
      <Text style={styles.title}>Report a concern</Text>
      <Text style={styles.text}>
        highlight any concerns you may have during your shifts regarding the
        beneficiaries
      </Text>
      <TextInput
        value={remarks}
        onChangeText={handleChangeRemarksText}
        placeholder="Highlight your concerns, if any."
        style={styles.remarksInput}
        multiline={true}
        numberOfLines={4}
      />
      <Text>No Image Uploaded</Text>
      <View style={styles.buttonsContainer}>
        <IconButton
          text="Camera"
          icon="camera"
          color={'white'}
          onPress={captureImage}
          bgColor="#97233F"
        />
        <IconButton
          text="Upload"
          icon="md-briefcase-sharp"
          color={'white'}
          onPress={pickImage}
          bgColor="#97233F"
        />
        <IconButton
          text="Clear"
          icon="md-play-skip-back-circle-sharp"
          color={'white'}
          onPress={() => setImage(null)}
          bgColor="#97233F"
        />
      </View>

      <View style={styles.submitBtn}>
        <Button onPress={submitConcern} title="Submit" color={'white'} />
      </View>
    </View>
  );
}

export default EmergencyAlert;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: 20,
    gap: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#E52B50',
  },
  text: {
    textAlign: 'center',
    paddingTop: 4,
  },
  remarksInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#9e1b32',
    borderRadius: 10,
    width: '100%',
    height: 80,
    marginTop: 10,
  },
  buttonsContainer: {
    flexDirection: 'row',
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  submitBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#FF0800',
    borderRadius: 10,
    backgroundColor: '#FF0800',
    width: '100%',
  },
});
