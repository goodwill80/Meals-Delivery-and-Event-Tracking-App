import React, { useState, useContext } from "react"; 
import { View, Text, Switch } from "react-native"; 
import { EventRegister } from 'react-native-event-listeners';

function SettingsScreen() {

  const [darkMode, setDarkMode] = useState(false)

  return (
    <View>
      <Text style={{ textAlign: "center", marginTop: 300 }}>
        Welcome to the Settings page!
      </Text>
      <Switch 
        style={{ alignItems: 'center', justifyContent: 'center' }}
        value={darkMode}
        onValueChange={(value) => {
            setDarkMode(value);
            EventRegister.emit('changeTheme', value)
        }}
        />
    </View>
  );
}

export default SettingsScreen;
