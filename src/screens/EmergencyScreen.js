import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { useGlobalEventsContext } from '../../Store/context/events-context';

function EmergencyScreen() {
  const { allEmergencies } = useGlobalEventsContext();

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>Welcome!</Text>
      <Text style={styles.subText}>This is Emergency Report!</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {allEmergencies.length > 0 ? (
          allEmergencies.map((emergency) => (
            <View>
              <Text>{emergency?.volunteer.name}</Text>
              <Text>{emergency?.volunteer.phone}</Text>
              <Text>{emergency?.volunteer.id}</Text>
              <Text>{emergency?.event.name}</Text>
              <Text>{emergency?.event.address}</Text>
              <Text>{emergency?.remarks}</Text>
              <Image
                style={styles.image}
                source={{ uri: emergency?.imageUrl }}
              />
            </View>
          ))
        ) : (
          <View style={styles.container}>
            <Text style={styles.emptyText}>There are no concerns raised</Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default EmergencyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 18,
    color: 'green',
    marginTop: 20,
  },
  headerText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#1F75FE',
    fontWeight: 'bold',
    marginTop: 40,
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
  image: {
    height: 200,
    width: 200,
  },
});
