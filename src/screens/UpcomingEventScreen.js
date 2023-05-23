import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  FlatList,
  Pressable,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { volunteers } from '../../Data/Dummy_data';

function UpcomingEventScreen({ navigation }) {
  const navigate = useNavigation();
  const volunteer = volunteers[0];

  const events = volunteer.scheduledEvents;

  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerTitle}>Upcoming Events!</Text> */}
      {/* <Button
        title="Event 1"
        onPress={() => navigation.navigate('EventDetail')}
      /> */}

      <FlatList
        data={events}
        showsVerticalScrollIndicator={false}
        renderItem={(event) => {
          return (
            <Pressable
              onPress={() => navigate.navigate('EventDetail', event.item)}
            >
              <View style={styles.eventContainer}>
                <View style={styles.eventDateContainer}>
                  <Text style={styles.eventDateText}>
                    {event.item.event.name}
                  </Text>
                  <Text style={styles.eventDateText}>
                    {event.item.event.date}
                  </Text>
                </View>
                <View style={styles.eventDetailContainer}>
                  <View style={styles.imageContainer}>
                    <Image
                      style={styles.imageDetails}
                      source={{
                        uri: `${event.item.event.imageUrl}`,
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
                      {event.item.event.timeSlot}
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
                      {event.item.event.description}
                    </Text>
                  </View>
                </View>
              </View>
            </Pressable>
          );
        }}
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
});
