import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const PersonalQuestions = ({ navigation }) => {
  // State variables for storing answers to personal questions
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here (e.g., save to a database or backend)
    console.log("Submitted answers:", {
      answer1,
      answer2,
      answer3,
      answer4,
    });
  };

  return (
    <View style={styles.pageContainer}>
      {/* Back Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.backButton}
      >
        <Text style={styles.backText}>Back</Text>
      </TouchableOpacity>

      {/* Scrollable Form for Personal Questions */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Personal Questions</Text>

        <Text style={styles.questionText}>
          1. What motivates you to apply for this bursary?
        </Text>
        <TextInput
          style={styles.input}
          value={answer1}
          onChangeText={setAnswer1}
          placeholder="Your answer..."
          multiline
        />

        <Text style={styles.questionText}>
          2. Describe a challenge you've overcome and how it shaped you.
        </Text>
        <TextInput
          style={styles.input}
          value={answer2}
          onChangeText={setAnswer2}
          placeholder="Your answer..."
          multiline
        />

        <Text style={styles.questionText}>
          3. Where do you see yourself in 5 years?
        </Text>
        <TextInput
          style={styles.input}
          value={answer3}
          onChangeText={setAnswer3}
          placeholder="Your answer..."
          multiline
        />

        <Text style={styles.questionText}>
          4. Why do you think you're a good fit for this bursary?
        </Text>
        <TextInput
          style={styles.input}
          value={answer4}
          onChangeText={setAnswer4}
          placeholder="Your answer..."
          multiline
        />

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit Answers</Text>
        </TouchableOpacity>
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
  questionText: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    width: "100%",
    height: 80,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 20,
    textAlignVertical: "top", // Keep text at the top when multiline
  },
  submitButton: {
    backgroundColor: "#00BFFF",
    width: "100%",
    height: 50,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default PersonalQuestions;
