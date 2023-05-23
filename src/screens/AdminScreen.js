import React, { useState } from "react";
import { View, TextInput, Alert, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import validator from "validator";
import OutlinedButton from "../Components/OutlineButton";

function AdminScreen() {
  //const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwd, setPasswd] = useState("");

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (email.trim() === "" || passwd.trim() === "" ) {
      Alert.alert("Incomplete Form", "Please input both email and password.");
      return;
    }

    if (!validator.isEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    Alert.alert(
      "Logged in.",
      `User: ${email}\nWelcome!`
    );
    setEmail("");
    setPasswd("");
  };

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View style={styles.container}>
        <Text style={styles.headerText}>Administrator Login</Text>
        <Text style={styles.subText}>
          For staff only.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="password"
            placeholderTextColor="#888"
            value={passwd}
            onChangeText={(text) => setPasswd(text)}
          />
        </View>
        <View style={styles.completionBtn}>
          <OutlinedButton onPress={handleSubmit} color="#1F75FE">
            Login
          </OutlinedButton>
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
  completionBtn: {
    marginTop: 20,
  },
});
