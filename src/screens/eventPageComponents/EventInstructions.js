import { View, StyleSheet, Text, Image } from 'react-native';

function EventInstructions({ event }) {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.placeContainer}>
        <Text style={[styles.placeTitle]}>Place:</Text>
        <Text style={styles.text}>{event.place}</Text>
      </View>

      <View style={styles.reportingTimeContainer}>
        <Text style={[styles.reportingTimeText, styles.text]}>
          Reporting Time:{' '}
        </Text>
        <Text style={styles.text}>{event.reportingTime}</Text>
      </View>

      <View>
        <Image style={styles.image} source={{ uri: event.imageUrl }} />
      </View>

      <View style={styles.instructionContainer}>
        <Text style={styles.instructionTitle}>Instructions:</Text>
        <Text style={styles.instructionText}>{event.instructions}</Text>
      </View>
    </View>
  );
}

export default EventInstructions;

const styles = StyleSheet.create({
  rootContainer: {
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  placeContainer: {
    justifyContent: 'center',
    alignContent: 'center',
    gap: 8,
    width: '70%',
  },
  placeTitle: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#002D62',
  },
  reportingTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingVertical: 25,
  },
  reportingTimeText: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
  },
  instructionContainer: {
    width: '80%',
    paddingVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
    marginBottom: 15,
  },
  instructionTitle: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  instructionText: {
    textAlign: 'center',
  },
  image: {
    height: 150,
    width: 250,
    borderRadius: 30,
  },
});
