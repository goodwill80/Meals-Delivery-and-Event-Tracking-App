import React, { useState, useEffect } from "react";
import {
  View,
  TextInput,
  Alert,
  Text,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
  Button,
} from "react-native";
import validator from "validator";
import { useNavigation } from "@react-navigation/native";

function AdminScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (email.trim() === "" || passwd.trim() === "") {
      Alert.alert("Incomplete Form", "Please input both email and password.");
      return;
    }

    if (!validator.isEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    if (passwd.length !== 8) {
      Alert.alert("Invalid Password", "Password must be 8 characters long");
      return;
    }

    Alert.alert("Logged in.", `User: ${email}\nWelcome!`);
    setEmail("");
    setPasswd("");

    // After successful login, navigate to the Emergency Screen
    navigation.navigate(" ");
  };

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.headerText}>Administrator Login</Text>
        <Text style={styles.subText}>For staff only.</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Password"
            placeholderTextColor="#888"
            value={passwd}
            onChangeText={(text) => setPasswd(text)}
            secureTextEntry={true}
          />
        </View>
        <View style={styles.loginBtn}>
          <Button onPress={handleSubmit} title="Login" color="white" />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AdminScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  headerText: {
    fontSize: 28,
    textAlign: "center",
    marginTop: 50,
    marginBottom: 20,
    color: "#1F75FE",
    fontWeight: "bold",
  },
  subText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 10,
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
  messageInput: {
    height: 80,
    color: "#000",
  },
  loginBtn: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: "#1F75FE",
    borderRadius: 10,
    backgroundColor: "#1F75FE",
    alignItems: "center",
    justifyContent: "center",
  },
});
