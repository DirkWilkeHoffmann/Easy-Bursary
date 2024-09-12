import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using expo for icons

const StudentInfo = ({ navigation }) => {
  // State variables for form inputs
  const [nationality, setNationality] = useState("");
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [homeAddress, setHomeAddress] = useState("");
  const [criminalRecord, setCriminalRecord] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  return (
    <View style={styles.pageContainer}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Ionicons name="arrow-back" size={24} color="#00BFFF" />
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Scrollable Form */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Fill in your personal information</Text>

        <TextInput
          style={styles.input}
          placeholder="Nationality"
          value={nationality}
          onChangeText={setNationality}
        />
        <TextInput
          style={styles.input}
          placeholder="First Name"
          value={firstName}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Surname"
          value={surname}
          onChangeText={setSurname}
        />
        <TextInput
          style={styles.input}
          placeholder="Phone Number"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <TextInput
          style={styles.input}
          placeholder="Home Address"
          value={homeAddress}
          onChangeText={setHomeAddress}
        />
        <TextInput
          style={styles.input}
          placeholder="Criminal Record"
          value={criminalRecord}
          onChangeText={setCriminalRecord}
        />
        <TextInput
          style={styles.input}
          placeholder="ID Number"
          value={idNumber}
          onChangeText={setIdNumber}
        />
        <TextInput
          style={styles.input}
          placeholder="Date of Birth"
          value={dateOfBirth}
          onChangeText={setDateOfBirth}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  pageContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 15,
    marginTop: 40, // Adjust depending on status bar
  },
  backText: {
    color: "#00BFFF",
    fontSize: 18,
    marginLeft: 5,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "100%",
    height: 50,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 15,
  },
});

export default StudentInfo;
