import { View, Text, Button, StyleSheet, Image } from 'react-native';
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
        <View style={styles.eventDetailContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageDetails}
              source={{
                uri: 'https://www.homage.sg/wp-content/uploads/2018/08/rsz_11day-care-centre-final-image-min-844x562.png',
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
              Time: 0900hrs - 1200hrs
            </Text>
            <Text style={{ fontSize: 16, fontWeight: 'bold', paddingTop: 4 }}>
              Description:{' '}
            </Text>
            <Text style={{ fontSize: 16 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
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
