import React, { useState } from "react";
import { View, Switch, StyleSheet } from "react-native";
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
    padding: 24,
  },
  completionBtn: {
    marginTop: 20,
  },
});