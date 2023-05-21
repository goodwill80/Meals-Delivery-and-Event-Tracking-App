import React from 'react';
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
import EventListScreen from './src/screens/EventListScreen';

import Event1DetailScreen from './src/screens/eventDetails/Event1DetailScreen';
import Event2DetailScreen from './src/screens/eventDetails/Event2DetailScreen';
import Event3DetailScreen from './src/screens/eventDetails/Event3DetailScreen';

import { volunteers, events } from './Data/Dummy_data';

// Creating instances for tab and drawer navigators
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const EventStack = createStackNavigator();

// EventNavigator is a component for the event stack navigation
function EventNavigator() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen name="EventList" component={EventListScreen} />
      <EventStack.Screen name="Event1Detail" component={Event1DetailScreen} />
      <EventStack.Screen name="Event2Detail" component={Event2DetailScreen} />
      <EventStack.Screen name="Event3Detail" component={Event3DetailScreen} />
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
        tabBarActiveTintColor: 'purple',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Events" component={EventNavigator} />
    </Tab.Navigator>
  );
}

function App() {
  // console.log(volunteers[0].scheduledEvents[4].addresses);
  // console.log(events[0].volunteersEnrolled[0].name);
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Main">
        <Drawer.Screen name="Main" component={MainTabNavigator} />
        <Drawer.Screen name="About" component={AboutScreen} />
        <Drawer.Screen name="Emergency" component={EmergencyScreen} />
        <Drawer.Screen name="Assistance" component={AssistanceScreen} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;
