import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import theme from "../theme/theme";

function HomeScreen() {
  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={[styles.imageContainer, { backgroundColor: "#F2F2F2" }]}>
        <Image
          source={require("../image/volunteer.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.headerText}>Welcome!</Text>
      <Text style={styles.subText}>
        Thank you for volunteering with us!
        {"\n"}
        We are grateful for your presence and the invaluable contribution you
        make to the community. Your service and dedication are highly
        appreciated. Together, we can make a real difference in the lives of
        others.
      </Text>
    </View>
  );
}

export default HomeScreen;

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
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 440,
    height: 320,
  },
});