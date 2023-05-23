import React, { useState, useEffect, useContext } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import { EventRegister } from 'react-native-event-listeners';

import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import AboutScreen from './src/screens/AboutScreen';
import AppSupportScreen from './src/screens/AppSupportScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import UpcomingEventScreen from './src/screens/UpcomingEventScreen';
import EventDetailScreen from './src/screens/EventDetailScreen';
import FullMap from './src/screens/eventPageComponents/FullMap';
import MealLocationsScreen from './src/screens/MealLocationsScreen';

// Context Provider
import EventsContextProvider from './Store/context/events-context';
import themeContext from './src/theme/themeContext';
import theme from './src/theme/theme';

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
        options={{
          title: 'Events',
        }}
      />
      {/* <EventStack.Screen name="Event1Detail" component={Event1DetailScreen} /> */}
      <EventStack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{
          title: 'Event',
        }}
      />
      <EventStack.Screen name="Map View" component={FullMap} />
      <EventStack.Screen
        name="Deliver Locations"
        component={MealLocationsScreen}
        options={{
          title: 'Meal Delivery Locations',
        }}
      />
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
        tabBarActiveTintColor: '#1F75FE',
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
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener('changeTheme', (data) => {
      setDarkMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeEventListener(listener);
    };
  }, [darkMode]);

  return (
    <EventsContextProvider>
      <themeContext.Provider
        value={darkMode === true ? theme.dark : theme.light}
      >
        <NavigationContainer
          theme={darkMode === true ? DarkTheme : DefaultTheme}
        >
          <SafeAreaView
            style={[
              styles.container,
              { backgroundColor: theme.backgroundColor },
            ]}
          >
            <Drawer.Navigator
              initialRouteName="Main"
              screenOptions={{
                headerTintColor: '#1F75FE',
                drawerInactiveTintColor: 'gray',
                drawerActiveTintColor: '#1F75FE',
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
                name="AppSupport"
                component={AppSupportScreen}
                options={{
                  title: 'App Support',
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
      </themeContext.Provider>
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
