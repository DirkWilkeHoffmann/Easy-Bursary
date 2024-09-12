import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const goToAwardedBursaries = () => {
    navigation.navigate("AwardedBursaries");
  };
  const goToAvailableBursaries = () => {
    navigation.navigate("AvailableBursaries");
  };

  const goToStudentInfo = () => {
    navigation.navigate("StudentInfo");
  };

  const goToPersonalQuestions = () => {
    navigation.navigate("PersonalQuestions");
  };

  return (
    <View style={styles.container}>
      {/* Logo */}
      <Text style={styles.logo}>slip</Text>

      <View style={styles.grid}>
        <TouchableOpacity style={styles.tile} onPress={goToStudentInfo}>
          <Text style={styles.tileText}>Student Information</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>
          <Text style={styles.tileText}>Student Documentation</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile} onPress={goToAvailableBursaries}>
          <Text style={styles.tileText}>Available Bursaries</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile} onPress={goToAwardedBursaries}>
          <Text style={styles.tileText}>Awarded Bursaries </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile} onPress={goToPersonalQuestions}>
          <Text style={styles.tileText}>Personal Questions</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.tile}>
          <Text style={styles.tileText}>Career Questions</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>slip</Text>
        <TouchableOpacity>
          <Text style={styles.footerIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
  logo: {
    fontSize: 60,
    color: "#00BFFF",
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    width: "100%",
    paddingHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  tile: {
    backgroundColor: "#00BFFF",
    width: "40%",
    height: 100,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  tileText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  footer: {
    position: "absolute",
    bottom: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 30,
  },
  footerText: {
    color: "#00BFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  footerIcon: {
    fontSize: 24,
    color: "#00BFFF",
  },
});

export default HomeScreen;
