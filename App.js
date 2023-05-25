import React, { useState, useEffect, useContext } from "react";
import { SafeAreaView, StyleSheet, LogBox } from "react-native";

import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { EventRegister } from "react-native-event-listeners";

import HomeScreen from "./src/screens/HomeScreen";
import ProfileScreen from "./src/screens/ProfileScreen";
import AboutScreen from "./src/screens/AboutScreen";
import AppSupportScreen from "./src/screens/AppSupportScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import UpcomingEventScreen from "./src/screens/UpcomingEventScreen";
import EventDetailScreen from "./src/screens/EventDetailScreen";
import FullMap from "./src/screens/eventPageComponents/FullMap";
import MealLocationsScreen from "./src/screens/MealLocationsScreen";
import MealDeliveryDetailsScreen from "./src/screens/MealDeliveryDetailsScreen";

// Context Provider
import EventsContextProvider from "./Store/context/events-context";
import themeContext from "./src/theme/themeContext";
import LoginScreen from "./src/screens/LoginScreen";
import AdminScreen from "./src/screens/AdminScreen";
import EmergencyScreen from "./src/screens/EmergencyScreen";
import theme from "./src/theme/theme";

const Stack = createStackNavigator(); // Stack navigator for login screen
const Tab = createBottomTabNavigator(); // Bottom tab navigator for main screens
const Drawer = createDrawerNavigator(); // Drawer navigator for side menu
const EventStack = createStackNavigator(); // Stack navigator for event-related screens

function EventNavigator() {
  return (
    <EventStack.Navigator>
      <EventStack.Screen
        name="Upcoming Events"
        component={UpcomingEventScreen}
        options={{
          title: "Events",
        }}
      />
      <EventStack.Screen
        name="EventDetail"
        component={EventDetailScreen}
        options={{
          title: "Event",
        }}
      />
      <EventStack.Screen name="Map View" component={FullMap} />
      <EventStack.Screen
        name="Deliver Locations"
        component={MealLocationsScreen}
        options={{
          title: "Meal Delivery Locations",
        }}
      />
      <EventStack.Screen
        name="location details"
        component={MealDeliveryDetailsScreen}
        options={{
          title: "Location details",
        }}
      />
    </EventStack.Navigator>
  );
}

// Main Tab Navigator
function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "Home") {
            iconName = focused ? "home" : "home-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "person" : "person-outline";
          } else if (route.name === "Events") {
            iconName = focused ? "calendar" : "calendar-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#1F75FE",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen} //standalone in the MainTabNavigator
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
        component={EventNavigator} // Event Navigator nested in MainTabNavigator
        options={{
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

function App() {
  LogBox.ignoreAllLogs(); // Disable all warnings
  const theme = useContext(themeContext);
  const [darkMode, setDarkMode] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const listener = EventRegister.addEventListener("changeTheme", (data) => {
      setDarkMode(data);
      console.log(data);
    });
    return () => {
      EventRegister.removeEventListener(listener);
    };
  }, [darkMode]);

  // Render login screen if not logged in
  if (!loggedIn) {
    // Standalone stack  
    return (
      <NavigationContainer theme={darkMode === true ? DarkTheme : DefaultTheme}>
        <Stack.Navigator initialRouteName="Login" headerMode="none">
          <Stack.Screen
            name="Login"
            component={() => <LoginScreen setLoggedIn={setLoggedIn} />}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  // Render the main app screens
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
                headerTintColor: "#1F75FE",
                drawerInactiveTintColor: "gray",
                drawerActiveTintColor: "#1F75FE",
              }}
            >
              <Drawer.Screen
                name="Main"
                component={MainTabNavigator} // Tab Navigator nested in Drawer Navigator
                options={{
                  title: "Main",
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="home" color={color} size={size} />
                  ),
                }}
              />
              <Drawer.Screen
                name="About"
                component={AboutScreen} //standalone in the Drawer Navigator
                options={{
                  title: "About us",
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="people" color={color} size={size} />
                  ),
                }}
              />
              <Drawer.Screen
                name="AppSupport"
                component={AppSupportScreen}
                options={{
                  title: "App Support",
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
                component={() => <SettingsScreen setLoggedIn={setLoggedIn} />}
                options={{
                  title: "Logout",
                  drawerIcon: ({ color, size }) => (
                    <Ionicons name="md-log-out" color={color} size={size} />
                  ),
                }}
              />
              <Drawer.Screen
                name="Admin"
                component={AdminScreen}
                options={{
                  title: "Admin",
                  drawerIcon: ({ color, size }) => (
                    <Ionicons
                      name="person-circle-outline"
                      color={color}
                      size={size}
                    />
                  ),
                }}
              />
              <Drawer.Screen name=" " component={EmergencyScreen} />
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
    backgroundColor: "#fff",
  },
});
