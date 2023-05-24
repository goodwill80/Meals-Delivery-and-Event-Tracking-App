import React, { useState, useContext } from "react";
import { View, Text, Switch, StyleSheet } from "react-native";
import { EventRegister } from "react-native-event-listeners";

function SettingsScreen() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.settingContainer}>
      <Text style={{ textAlign: "center", marginTop: 20 }}>
        Welcome to the Settings page!
      </Text>
      <View style={styles.themesContainer}>
        <Text style={styles.themeText}>Toggle themes</Text>
        <Switch
          style={{ alignItems: "center", justifyContent: "center" }}
          value={darkMode}
          onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit("changeTheme", value);
          }}
        />
      </View>
    </View>
  );
}

export default SettingsScreen;

const styles = StyleSheet.create({
  settingContainer: {
    flex: 1,
    alignItems: "center",
    gap: 10,
  },
  themesContainer: {
    flexDirection: 'row',
    gap: 200,
  },
  themeText: {
    marginTop: 15,
  }
});
