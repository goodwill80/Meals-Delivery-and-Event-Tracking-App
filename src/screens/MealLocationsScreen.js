import { useState, useEffect } from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  Text,
  Pressable,
  Button,
  TextInput,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useGlobalEventsContext } from '../../Store/context/events-context';
import { useNavigation } from '@react-navigation/native';

function MealLocationsScreen() {
  const navigation = useNavigation();
  const { getVolunteerById, completeEvent, completeDelivery } =
    useGlobalEventsContext();
  const [locations, setLocations] = useState(null);
  const [remarks, setRemarks] = useState('');
  const [program, setProgram] = useState();
  const route = useRoute();
  const volunteerId = route.params?.volunteerId;
  const eventId = route.params?.eventId;
  const event = route.params?.actualEvent;
  const actualEventId = route.params?.actualEventId;

  // console.log(event.place);

  useEffect(() => {
    if (volunteerId) {
      const volunteer = getVolunteerById(volunteerId);
      const event = volunteer?.scheduledEvents.find((event) => {
        return event.addresses.length > 0;
      });
      if (event) {
        setProgram(event?.event);
      }
      const pendingAddresses = event.addresses.filter(
        (address) => !address.completed
      );
      setLocations(pendingAddresses);
    }
  }, [completeDelivery]);

  // Handle remarks
  const handleChangeRemarksText = (e) => {
    setRemarks(e);
  };

  // Submit handler for completion
  const submitCompletionOfEvent = () => {
    completeEvent(volunteerId, actualEventId, '', remarks);
    navigation.navigate('Upcoming Events');
  };

  return (
    <View style={styles.rootContainer}>
      {locations?.length === 0 ? (
        <View style={styles.completionContainer}>
          <Text style={styles.completionText}>
            You have completed all your deliveries. Please click on button below
            to complete the event.
          </Text>
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
              color={'white'}
            />
          </View>
        </View>
      ) : (
        <View>
          <View style={styles.colectionTextContainer}>
            <Text style={styles.collectionPointHeader}>
              Ration Collection Point:
            </Text>
            <Text style={styles.collectionPointText}>{program?.place}</Text>
          </View>
          <Text style={styles.locationsHeaderText}>
            Scheduled Delivery Locations:
          </Text>
          <FlatList
            showsVerticalScrollIndicator={false}
            data={locations}
            renderItem={(itemData) => {
              return (
                <Pressable
                  onPress={() =>
                    navigation.navigate('location details', {
                      addresses: itemData.item,
                      eventId: eventId,
                      volunteerId: volunteerId,
                      actualEventId: actualEventId,
                      event: event,
                    })
                  }
                  style={({ pressed }) => [pressed && styles.pressed]}
                >
                  <View style={styles.itemContainer}>
                    <View style={styles.firstRow}>
                      <Text style={styles.headerText}>
                        {itemData.item.bene}
                      </Text>
                      <Text style={styles.headerText}>
                        {itemData.item.meal} lunch
                      </Text>
                    </View>
                    <Text style={styles.headerText}>Deliver to:</Text>
                    <View>
                      <Text>{itemData.item.address}</Text>
                    </View>
                  </View>
                </Pressable>
              );
            }}
            keyExtractor={(item) => item.id}
          />
        </View>
      )}
    </View>
  );
}

export default MealLocationsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#034694',
  },
  itemContainer: {
    width: 350,
    height: 120,
    borderWidth: 1,
    borderColor: '#00BFFF',
    marginTop: 10,
    padding: 20,
    borderRadius: 10,
  },
  firstRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  pressed: {
    opacity: 0.7,
  },
  completionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  completionText: {
    textAlign: 'center',
  },
  completionBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#2a52be',
    borderRadius: 10,
    backgroundColor: '#2a52be',
    width: 350,
  },
  remarksContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    width: 340,
  },
  remarksInput: {
    padding: 12,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    width: '100%',
    height: 60,
  },
  colectionTextContainer: {
    gap: 10,
    marginBottom: 30,
  },
  collectionPointHeader: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 30,
    color: '#007FFF',
  },
  collectionPointText: {
    fontSize: 16,
  },
  locationsHeaderText: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#6F00FF',
  },
});
