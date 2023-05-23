import React, { useState } from "react";
import { View, TextInput, Alert, Text, StyleSheet, Keyboard, TouchableWithoutFeedback } from "react-native";
import validator from "validator";
import OutlinedButton from "../Components/OutlineButton";

function AppSupportScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    Keyboard.dismiss();

    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      Alert.alert("Incomplete Form", "Please fill in all the fields");
      return;
    }

    if (!validator.isEmail(email)) {
      Alert.alert("Invalid Email", "Please enter a valid email address");
      return;
    }

    Alert.alert(
      "Form Submitted",
      `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    );
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleContainerPress = () => {
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={handleContainerPress}>
      <View style={styles.container}>
        <Text style={styles.headerText}>We're here to help!</Text>
        <Text style={styles.subText}>
          If you're having problems with our app, please fill out the form below.
        </Text>
        <Text style={styles.subText}>
          Your feedback will help us improve the app for everyone.
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your name"
            placeholderTextColor="#888"
            value={name}
            onChangeText={(text) => setName(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#888"
            value={email}
            onChangeText={(text) => setEmail(text)}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={[styles.input, styles.messageInput]}
            placeholder="Enter your message"
            placeholderTextColor="#888"
            value={message}
            onChangeText={(text) => setMessage(text)}
            multiline
          />
        </View>
        <View style={styles.completionBtn}>
          <OutlinedButton onPress={handleSubmit} color="#1F75FE">
            Submit
          </OutlinedButton>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default AppSupportScreen;

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
