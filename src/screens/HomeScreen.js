import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import theme from '../theme/theme';


function HomeScreen() {
  return (
    <View style={[styles.container, {backgroundColor:theme.backgroundColor}]}>
      <Text>
        Welcome, user!
      </Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
