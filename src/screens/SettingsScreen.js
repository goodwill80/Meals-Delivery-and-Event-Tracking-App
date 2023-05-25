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
      <Text style={styles.headerText}>See You!</Text>
      {/* <Switch
        style={{ alignItems: "center", justifyContent: "center" }}
        value={darkMode}
        onValueChange={(value) => {
          setDarkMode(value);
          EventRegister.emit("changeTheme", value);
        }}
      /> */}
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
    borderWidth: 1,
    borderColor: '#1F75FE',
    borderRadius: 10,
    backgroundColor: '#1F75FE',
    width: '90%',
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
    marginTop: 20,
    marginBottom: 20,
  },
});
