import React from "react";
import { View, Text, Button } from "react-native";

function EventListScreen({ navigation }) {
  return (
    <View>
      <Text style={{ textAlign: "center", marginTop: 50 }}>
        Welcome to the Event List page!
      </Text>
      <Button title="Go to Event 1 Detail" onPress={() => navigation.navigate('Event1Detail')} />
      <Button title="Go to Event 2 Detail" onPress={() => navigation.navigate('Event2Detail')} />
      <Button title="Go to Event 3 Detail" onPress={() => navigation.navigate('Event3Detail')} />
    </View>
  );
}

export default EventListScreen;
