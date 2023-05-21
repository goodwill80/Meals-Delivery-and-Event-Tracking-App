import React from "react";
import { View, Text, Button } from "react-native";

function UpcomingEventScreen({ navigation }) {
  return (
    <View>
      <Text style={{ textAlign: "center", marginTop: 50 }}>
        Upcoming Events!
      </Text>
      <Button title="Go to Event 1 Detail" onPress={() => navigation.navigate('Event1Detail')} />
      <Button title="Go to Event 2 Detail" onPress={() => navigation.navigate('Event2Detail')} />
      <Button title="Go to Event 3 Detail" onPress={() => navigation.navigate('Event3Detail')} />
    </View>
  );
}

export default UpcomingEventScreen;
