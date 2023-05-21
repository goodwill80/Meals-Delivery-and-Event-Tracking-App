import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CompletionImagePicker from './CompletionImagePicker';
import OutlinedButton from '../../Components/OutlineButton';

import LocationMap from './LocationMap';

const Event2DetailScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View>
          <Text style={styles.title}>Event 2</Text>
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
