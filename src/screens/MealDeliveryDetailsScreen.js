import { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, Button } from 'react-native';
import LocationMap from './eventPageComponents/LocationMap';
import EmergencyAlert from './eventPageComponents/EmergencyAlert';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useGlobalEventsContext } from '../../Store/context/events-context';

function MealDeliveryDetailsScreen() {
  const [volunteer, setVolunteer] = useState();
  const [program, setProgram] = useState();
  const navigation = useNavigation();
  const route = useRoute();
  const { completeDelivery, getVolunteerById } = useGlobalEventsContext();
  const { address, meal, bene, id } = route.params.addresses;
  const volunteerId = route.params.volunteerId;
  const eventId = route.params.eventId;
  const event = route.params;
  const actualEventId = route.params?.actualEventId;

  const complete = () => {
    completeDelivery(volunteerId, eventId, id);
    navigation.navigate('Deliver Locations', {
      volunteerId: volunteerId,
      eventId: eventId,
      event: event,
      actualEventId: actualEventId,
    });
  };

  useEffect(() => {
    if (volunteerId) {
      const person = getVolunteerById(volunteerId);
      const prog = person.scheduledEvents.find(
        (evt) => evt.event.id === actualEventId
      );
      setProgram(prog.event);
      setVolunteer(person);
    }
  }, []);

  return (
    <ScrollView>
      <View style={styles.rootContainer}>
        <View style={styles.instructionContainer}>
          <Text style={styles.maintitle}>Meals-On-Wheels</Text>
          <Text style={styles.instructionHeader}>Instructions:</Text>
          <Text style={styles.instructionText}>
            Deliver {meal} ration to the doorstep of {bene}
          </Text>
        </View>
        <View style={styles.instructionContainer}>
          <Text style={styles.instructionHeader}>Address:</Text>
          <Text style={styles.instructionText}>{address}</Text>
        </View>
        <LocationMap address={address} />
      </View>
      <View style={styles.completeBtnContainer}>
        <Button onPress={complete} title="Complete" color="white" />
      </View>
      <View style={styles.emergencyContainer}>
        <EmergencyAlert
          volunteer={volunteer}
          event={program}
          address={address}
          name={bene}
        />
      </View>
    </ScrollView>
  );
}

export default MealDeliveryDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    paddingTop: 20,
  },
  maintitle: {
    fontSize: 26,
    color: '#318CE7',
    fontWeight: 'bold',
  },
  instructionContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 290,
    gap: 10,
  },
  instructionHeader: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  instructionText: {
    textAlign: 'center',
  },
  completeBtnContainer: {
    backgroundColor: '#318CE7',
    marginHorizontal: 40,
    borderWidth: 1,
    borderColor: '#318CE7',
    borderRadius: 10,
    marginTop: 20,
  },
  emergencyContainer: {
    paddingHorizontal: 40,
  },
});
