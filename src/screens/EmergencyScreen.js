import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useGlobalEventsContext } from "../../Store/context/events-context";

function EmergencyScreen() {
  const { allEmergencies } = useGlobalEventsContext();

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>Hi Admin,</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {allEmergencies.length > 0 && (
          <Text style={styles.subText}>Volunteers have raised concerns that require your attention and action.</Text>
        )}
        {allEmergencies.length > 0 ? (
          allEmergencies.map((emergency) => (
            <View style={styles.eventContainer} key={emergency.id}>
              <View style={styles.mainContainer}>
                <View style={styles.volunteerInfoContainer}>
                  <View style={styles.volunteerName}>
                    <Text style={styles.volunteerValueText}>
                      {emergency?.volunteer.name}
                    </Text>
                  </View>
                  <View style={styles.volunteerPhone}>
                    <Text style={styles.volunteerValueText}>
                      {emergency?.volunteer.phone}
                    </Text>
                  </View>
                </View>
                <View style={styles.detailsContainer}>
                  <Text style={styles.detailsText}>
                    Event Name: {emergency?.event.name}
                  </Text>
                  <Text style={styles.detailsText}>
                    Event Place: {emergency?.event.place}
                  </Text>
                  <Text style={styles.detailsText}>
                    Remarks: {emergency?.remarks}
                  </Text>
                </View>
                <View style={styles.imageContainer}>
                  <View style={styles.imageWrapper}>
                    <Image
                      style={styles.image}
                      source={{ uri: emergency?.imageUrl }}
                    />
                  </View>
                </View>
              </View>
            </View>
          ))
        ) : (
          <View style={styles.container}>
            <Text style={styles.emptyText}>We have not received any concerns or issues from our volunteers at this time.</Text>
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
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 28,
    textAlign: "center",
    color: "#1F75FE",
    fontWeight: "bold",
    marginTop: 40,
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    padding: 20,
  },
  eventContainer: {
    paddingHorizontal: 16,
  },
  mainContainer: {
    borderWidth: 2,
    borderColor: "lightblue",
    borderRadius: 12,
    overflow: "hidden",
    marginBottom: 16,
  },
  volunteerInfoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 8,
    marginBottom: 8,
    paddingVertical: 8,
    backgroundColor: "#EFEFEF",
  },
  volunteerName: {
    flexDirection: "row",
    alignItems: "center",
  },
  volunteerPhone: {
    flexDirection: "row",
    alignItems: "center",
  },
  volunteerValueText: {
    fontSize: 16,
    marginLeft: 4,
  },
  detailsContainer: {
    padding: 8,
  },
  detailsText: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: 'bold'
  },
  imageContainer: {
    height: 210,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    height: 200,
    width: 300,
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 20, // Adjust the marginBottom as per your preference
  },
  image: {
    flex: 1,
    resizeMode: "cover",
  },
  emptyText: {
    fontSize: 16,
    color: "#708090",
    marginTop: 20,
    textAlign: "center",
  },
});
