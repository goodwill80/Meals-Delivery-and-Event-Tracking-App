import React, { useState } from "react";
import { View, Switch, StyleSheet, Image, Text, Button } from "react-native";
import { EventRegister } from "react-native-event-listeners";

function SettingsScreen({ setLoggedIn }) {
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false); // Set logged in state to false
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
      <View style={styles.logoutBtn}>
        <Button
          onPress={handleLogout}
          title="Logout"
          bgColor="#1F75FE"
          color={'white'}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoutBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#007791',
    borderRadius: 10,
    backgroundColor: '#007791',
    width: '92%',
    alignSelf: 'center',
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
