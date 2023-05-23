import React from "react";
import { View, Text, StyleSheet } from "react-native";

function EmergencyScreen() {
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.headerText}>Welcome!</Text>
      <Text style={styles.subText}>This is Emergency Report!</Text>
    </View>
  );
}

export default EmergencyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
