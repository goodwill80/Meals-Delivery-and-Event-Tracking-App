import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import CompletionImagePicker from './eventPageComponents/CompletionImagePicker';
import OutlinedButton from '../Components/OutlineButton';
import LocationMap from './eventPageComponents/LocationMap';
import { useRoute } from '@react-navigation/native';

const EventDetailScreen = () => {
  const route = useRoute();
  const event = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>{event.event.name}</Text>
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

export default EventDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  maintitle: {
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 10,
    color: '#1F75FE',
    fontWeight: 'bold',
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
