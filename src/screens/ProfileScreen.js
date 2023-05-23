import React from "react";
import { View, Text, Image, StyleSheet, FlatList } from "react-native";
import { volunteers } from "../../Data/Dummy_data";

function ProfileScreen() {
  const volunteer = volunteers[0];
  console.log(volunteer);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to your profile!</Text>
      <FlatList
        data={volunteers}
        renderItem={(volunteer) => {
          return (
            <View style={styles.volunteerContainer}>
              <View style={styles.imageContainer}>
                <Image
                  style={styles.imageDetails}
                  source={{ uri: `${volunteer.item.imageUrl}` }}
                />
              </View>
              <View>
                <View style={styles.textContainer}>
                  <Text style={styles.subheader}>ID: </Text>
                  <Text style={styles.volunteerInfo}>{volunteer.item.id}</Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.subheader}>Name: </Text>
                  <Text style={styles.volunteerInfo}>
                    {volunteer.item.name}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.subheader}>Email: </Text>
                  <Text style={styles.volunteerInfo}>
                    {volunteer.item.email}
                  </Text>
                </View>
                <View style={styles.textContainer}>
                  <Text style={styles.subheader}>Contact: </Text>
                  <Text style={styles.volunteerInfo}>
                    {volunteer.item.phone}
                  </Text>
                </View>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
}

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  header: {
    padding: 19,
    fontSize: 16,
    fontWeight: "bold",
    backgroundColor: 'white',
  },
  volunteerContainer: {
    alignItems: "center",
    paddingTop: 45,
    paddingBottom: 50,
  },
  imageContainer: {
    width: "30%",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 4,
    paddingBottom: 20,
  },
  imageDetails: {
    height: 200,
    width: 200,
    borderRadius: 50 / 2,
  },
  textContainer:{
    flexDirection: 'row',
  },
  subheader: {
    fontSize: 20,
    fontWeight: "bold",
  },
  volunteerInfo: {
    fontSize: 20,
    color: "black",
  },
});
