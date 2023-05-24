import React, { useState } from "react";
import { View, Switch, StyleSheet, Image, Text } from "react-native"; // Import the Text component
import { EventRegister } from "react-native-event-listeners";
import OutlinedButton from "../Components/OutlineButton";

function SettingsScreen({ setLoggedIn }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    // Set logged in state to false
    setLoggedIn(false);
  };

  return (
    <View style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={[styles.imageContainer, { backgroundColor: "#F2F2F2" }]}>
        <Image
          source={require("../image/settings.jpg")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.headerText}>Settings</Text>
      <Switch
        style={{ alignItems: "center", justifyContent: "center" }}
        value={darkMode}
        onValueChange={(value) => {
          setDarkMode(value);
          EventRegister.emit("changeTheme", value);
        }}
      />
      <View style={styles.completionBtn}>
        <OutlinedButton onPress={handleLogout} color="#1F75FE">
          Logout
        </OutlinedButton>
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  completionBtn: {
    marginTop: 20,
    padding: 24,
  },
  imageContainer: {
    alignItems: "center",
  },
  image: {
    width: 440,
    height: 320,
  },
  headerText: {
    fontSize: 28,
    textAlign: "center",
    color: "#1F75FE",
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 20,
  },
});
