import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

const LoginScreen = ({ navigation }) => {
  const [mobileNumber, setMobileNumber] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>
        <Text style={styles.logoBlue}>slip</Text>Bursary
      </Text>

      {/* Mobile Number Input */}
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        placeholderTextColor="#A9A9A9"
        value={mobileNumber}
        onChangeText={(text) => setMobileNumber(text)}
        keyboardType="phone-pad"
      />

      {/* Switch to Email */}
      <TouchableOpacity>
        <Text style={styles.switchText}>Use E-mail instead</Text>
      </TouchableOpacity>

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Password"
        placeholderTextColor="#A9A9A9"
        secureTextEntry
        value={password}
        onChangeText={(text) => setPassword(text)}
      />

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotText}>Forgot Password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity onPress={handleSignIn} style={styles.signInButton}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
  },
  logo: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 40,
  },
  logoBlue: {
    color: "#00BFFF", // Light blue color for "slip"
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
  },
  switchText: {
    color: "#00BFFF", // Light blue for "Use E-mail instead"
    marginBottom: 20,
  },
  forgotText: {
    alignSelf: "flex-start",
    color: "#A9A9A9",
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: "#00BFFF", // Light blue button
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  signInText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default LoginScreen;
