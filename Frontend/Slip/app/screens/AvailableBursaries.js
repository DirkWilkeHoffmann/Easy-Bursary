import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // Assuming you're using expo for icons

const AvailableBursaries = ({ navigation }) => {
  const [selectedBursaries, setSelectedBursaries] = useState([]);

  // List of bursaries
  const bursaries = [
    "Anglo American Coal",
    "Afrox",
    "Dell Young Leaders",
    "Gibela",
    "PPC",
    "Deloitte",
  ];

  const toggleBursarySelection = (bursary) => {
    // Add/remove bursary from selection
    if (selectedBursaries.includes(bursary)) {
      setSelectedBursaries(
        selectedBursaries.filter((item) => item !== bursary)
      );
    } else {
      setSelectedBursaries([...selectedBursaries, bursary]);
    }
  };

  const handleSubmit = () => {
    console.log("Selected Bursaries:", selectedBursaries);
    // Implement the submission logic (e.g., send to backend or move to another screen)
  };

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

      {/* Scrollable List of Bursaries */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>
          Select bursaries you wish to apply for:
        </Text>

        {bursaries.map((bursary, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.bursaryButton,
              selectedBursaries.includes(bursary) &&
                styles.selectedBursaryButton,
            ]}
            onPress={() => toggleBursarySelection(bursary)}
          >
            <Text
              style={[
                styles.bursaryButtonText,
                selectedBursaries.includes(bursary) &&
                  styles.selectedBursaryButtonText,
              ]}
            >
              {bursary}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Submit Button */}
        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Submit</Text>
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
    marginTop: 40, // Adjust for status bar
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
  bursaryButton: {
    width: "100%",
    height: 50,
    backgroundColor: "#F0F0F0",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 15,
  },
  selectedBursaryButton: {
    backgroundColor: "#00BFFF",
  },
  bursaryButtonText: {
    color: "#000",
    fontSize: 18,
    fontWeight: "bold",
  },
  selectedBursaryButtonText: {
    color: "#fff",
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

export default AvailableBursaries;
