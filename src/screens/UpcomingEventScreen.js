import { View, Text, Button, StyleSheet } from 'react-native';
import { volunteers } from '../../Data/Dummy_data';

function UpcomingEventScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* <Text style={styles.headerTitle}>Upcoming Events!</Text> */}
      <Button
        title="Event 1"
        onPress={() => navigation.navigate('EventDetail')}
      />
      <View style={styles.eventContainer}>
        <View style={styles.eventDateContainer}>
          <Text style={styles.eventDateText}>Elderly Care</Text>
          <Text style={styles.eventDateText}>15-Jan-2023</Text>
        </View>
        <View>
          <View>
            <Text>Image</Text>
          </View>
          <View>
            <Text>Details</Text>
          </View>
        </View>
      </View>
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
  },
  eventDateContainer: {
    padding: 4,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 50,
    backgroundColor: '#1F75FE',
  },
  eventDateText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: 'white',
  },
});
