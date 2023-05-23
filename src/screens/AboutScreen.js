import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

function AboutScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={require('../image/seniors.jpg')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <ScrollView>
        <Text style={styles.headerText}>Who We Are</Text>
        <Text style={styles.subText}>
          We are a non-profit voluntary welfare organisation established in
          1997. Over the years, we have been recognized for our active
          contributions towards the society, and have been granted Institute of
          Public Character (IPC) status as a charity. As a full member of the
          National Council of Social Service (NCSS), we are committed to improve
          the well-being of all people in the community of Singapore.
        </Text>
        <Text style={styles.headerText}>Our Vison </Text>
        <Text style={styles.subText}>
          To inspire hope in our youths and seniors.​
        </Text>
        <Text style={styles.headerText}>Our Mission</Text>
        <Text style={styles.subText}>
          To extend care to our youths and seniors through practical help and
          action regardless of race, language or religion.
        </Text>
      </ScrollView>
    </View>
  );
}

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerText: {
    fontSize: 28,
    textAlign: 'center',
    color: '#1F75FE',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 16,
    textAlign: 'center',
    padding: 20,
  },
  imageContainer: {
    alignItems: 'center',
  },
  image: {
    width: 500,
    height: 300,
    marginBottom: 20,
  },
});
