import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CompletionImagePicker from '../eventPageComponents/CompletionImagePicker';
import OutlinedButton from '../../Components/OutlineButton';

import LocationMap from '../eventPageComponents/LocationMap';

const Event2DetailScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <LocationMap />
          <CompletionImagePicker />
          <View style={styles.completionBtn}>
            <OutlinedButton>Click to Complete Event</OutlinedButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Event2DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  title: {
    fontWeight: 'bold',
    marginBottom: 4,
    color: 'blue',
    textAlign: 'center',
  },
  completionBtn: {
    marginTop: 20,
  },
});
