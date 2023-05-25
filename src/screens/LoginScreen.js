import React, { useState } from "react";
import {
  View,
  TextInput,
  Alert,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Text,
  Image,
  Button,
} from "react-native";
import validator from "validator";

const LoginScreen = ({ setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    Keyboard.dismiss();

    if (email.trim() === "" || password.trim() === "") {
      Alert.alert("Incomplete Form", "Please fill in all the fields");
      return;
    }

    if (!validator.isEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    if (password.length !== 8) {
      Alert.alert("Invalid Password", "Password must be 8 characters long");
      return;
    }

    Alert.alert("Logged in.", `User: ${email}`);

    setLoggedIn(true);
    console.log("Login successful!");
  };

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Volunteer Scheduler</Text>
        <View style={[styles.imageContainer, { backgroundColor: "#F2F2F2" }]}>
          <Image
            source={require("../image/calendar.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
        <Text style={styles.subText}>Please Login</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={(text) => setPassword(text)}
          />
        </View>
        <View style={styles.loginBtn}>
          <Button onPress={handleLogin} title="Login" bgColor="#0000FF"
          color={'white'} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headerText: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 80,
    color: "#1F75FE",
    fontWeight: "bold",
  
  },
  subText: {
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
    color: "#00308F",
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 10,
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    color: "#000",
  },
  loginBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#1F75FE",
    borderRadius: 10,
    backgroundColor: "#1F75FE",
  },
  imageContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  image: {
    width: 400,
    height: 340,
  },
});
