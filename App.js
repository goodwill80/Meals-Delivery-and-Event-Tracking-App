import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen';
import EmergencyScreen from './src/screens/EmergencyScreen';
import AssistanceScreen from './src/screens/AssistanceScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import UpcomingEventScreen from './src/screens/UpcomingEventScreen';
import Event1DetailScreen from './src/screens/eventDetails/Event1DetailScreen';
import Event2DetailScreen from './src/screens/eventDetails/Event2DetailScreen';
import FullMap from './src/screens/eventPageComponents/FullMap';

// Context Provider
import EventsContextProvider from './Store/context/events-context';
import { volunteers, events } from './Data/Dummy_data';

// Creating instances for tab and drawer navigators
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const EventStack = createStackNavigator();

// EventNavigator is a component for the event stack navigation
function EventNavigator() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name="Upcoming Events"
        component={UpcomingEventScreen}
      />
      <EventStack.Screen name="Event1Detail" component={Event1DetailScreen} />
      <EventStack.Screen name="Event2Detail" component={Event2DetailScreen} />
      <EventStack.Screen name="Map View" component={FullMap} />
    </EventStack.Navigator>
  );
}

// MainTabNavigator is a component for the bottom tab navigation.
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          } else if (route.name === 'Events') {
            iconName = focused ? 'calendar' : 'calendar-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Events"
        component={EventNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  return (
    <EventsContextProvider>
      <NavigationContainer>
        <SafeAreaView style={styles.container}>
          <Drawer.Navigator
            initialRouteName="Main"
            screenOptions={{
              headerTintColor: 'blue',
              drawerInactiveTintColor: 'gray',
              drawerActiveTintColor: 'blue',
            }}
          >
            <Drawer.Screen
              name="Main"
              component={MainTabNavigator}
              options={{
                title: 'Main',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="home" color={color} size={size} />
                ),
              }}
            />
            <Drawer.Screen
              name="About"
              component={AboutScreen}
              options={{
                title: 'About us',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="people" color={color} size={size} />
                ),
              }}
            />
            <Drawer.Screen
              name="Emergency"
              component={EmergencyScreen}
              options={{
                title: 'Emergency',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="medkit-sharp" color={color} size={size} />
                ),
              }}
            />
            <Drawer.Screen
              name="Assistance"
              component={AssistanceScreen}
              options={{
                title: 'Assistance',
                drawerIcon: ({ color, size }) => (
                  <Ionicons
                    name="chatbubble-ellipses-sharp"
                    color={color}
                    size={size}
                  />
                ),
              }}
            />
            <Drawer.Screen
              name="Settings"
              component={SettingsScreen}
              options={{
                title: 'Settings',
                drawerIcon: ({ color, size }) => (
                  <Ionicons name="md-apps-sharp" color={color} size={size} />
                ),
              }}
            />
          </Drawer.Navigator>
        </SafeAreaView>
      </NavigationContainer>
    </EventsContextProvider>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
