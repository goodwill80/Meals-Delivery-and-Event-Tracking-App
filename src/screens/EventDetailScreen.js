import React from 'react';
import { View, Text, ScrollView, StyleSheet, Button } from 'react-native';
import { useRoute } from '@react-navigation/native';

// Child Components
import EventInstructions from './eventPageComponents/EventInstructions';
import LocationMap from './eventPageComponents/LocationMap';
import CompletionImagePicker from './eventPageComponents/CompletionImagePicker';

const EventDetailScreen = () => {
  const route = useRoute();
  const event = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.maintitle}>{event.name}</Text>
      <ScrollView>
        <View>
          <EventInstructions event={event} />
          <LocationMap address={event.place} />
          <CompletionImagePicker
            event={event}
            volunteerId={event.volunteerId}
          />
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
});
