import { useLayoutEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useGlobalEventsContext } from '../../Store/context/events-context';

function UpcomingEventScreen({ navigation }) {
  const { getVolunteerById, completeEvent } = useGlobalEventsContext();
  const [events, setEvents] = useState(null);
  const navigate = useNavigation();

  useLayoutEffect(() => {
    if (getVolunteerById(1)) {
      const volunteer = getVolunteerById(1);
      const eventsOutstanding = volunteer?.scheduledEvents.filter(
        (evt) => !evt.completed
      );
      setEvents(eventsOutstanding);
    }
  }, [completeEvent]);

  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        showsVerticalScrollIndicator={false}
        renderItem={(event) => {
          const singleEvent = event.item?.event;
          return (
            <Pressable
              onPress={() =>
                navigate.navigate('EventDetail', {
                  ...singleEvent,
                  volunteerId: 1,
                })
              }
              style={({ pressed }) => [pressed && styles.pressed]}
            >
              <View style={styles.eventContainer}>
                <View style={styles.eventDateContainer}>
                  <Text style={styles.eventDateText}>{singleEvent?.name}</Text>
                  <Text style={styles.eventDateText}>{singleEvent?.date}</Text>
                </View>
                <View style={styles.eventDetailContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.imageDetails}
                      source={{
                        uri: `${singleEvent?.imageUrl}`,
                      }}
                    />
                  </View>
                  <View style={styles.detailsContainer}>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        color: '#2a52be',
                        paddingBottom: 4,
                      }}
                    >
                      {singleEvent?.timeSlot}
                    </Text>
                    <Text
                      style={{
                        fontSize: 16,
                        fontWeight: 'bold',
                        paddingTop: 4,
                      }}
                    >
                      Description:{' '}
                    </Text>
                    <Text style={{ fontSize: 16 }}>
                      {singleEvent?.description}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        }}
        keyExtractor={(item) => item.event?.id}
      />
    </View>
  );
}

export default UpcomingEventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  headerTitle: {
    textAlign: 'center',
  },
  eventContainer: {
    marginHorizontal: 8,
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 12,
    overflow: 'hidden',
    shadowColor: 'gray',
    shadowOpacity: 0.5,
    height: 150,
    marginBottom: 16,
  },
  eventDateContainer: {
    padding: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 40,
    backgroundColor: '#1F75FE',
  },
  eventDateText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
  },
  eventDetailContainer: {
    flexDirection: 'row',
    gap: 7,
    padding: 4,
  },
  imageContainer: {
    width: '30%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
  },
  imageDetails: {
    height: 90,
    width: 90,
  },
  detailsContainer: {
    width: '70%',
    paddingVertical: 10,
  },
  pressed: {
    opacity: 0.6,
  },
});
