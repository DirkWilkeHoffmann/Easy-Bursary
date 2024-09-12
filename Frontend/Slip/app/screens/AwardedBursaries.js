import React from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

const AwardedBursaries = ({ navigation }) => {
  // Example bursary data with statuses
  const bursaryStatuses = [
    { name: "Anglo American Coal", status: "pending" }, // Pending
    { name: "Afrox", status: "pending" }, // Pending
    { name: "Dell Leaders", status: "awarded" }, // Awarded
    { name: "Gibela", status: "awarded" }, // Awarded
  ];

  const getStatusStyle = (status) => {
    switch (status) {
      case "awarded":
        return styles.awardedStatus;
      case "pending":
        return styles.pendingStatus;
      default:
        return styles.notAwardedStatus;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "awarded":
        return <Ionicons name="checkmark-circle" size={24} color="#fff" />;
      case "pending":
        return <Ionicons name="time" size={24} color="#fff" />;
      default:
        return <Ionicons name="close-circle" size={24} color="#fff" />;
    }
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

      {/* Scrollable List of Bursaries with Status */}
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.headerText}>Bursary Application Status:</Text>

        {bursaryStatuses.map((bursary, index) => (
          <View
            key={index}
            style={[styles.bursaryItem, getStatusStyle(bursary.status)]}
          >
            <Text style={styles.bursaryText}>{bursary.name}</Text>
            {getStatusIcon(bursary.status)}
          </View>
        ))}
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
  bursaryItem: {
    width: "100%",
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    marginBottom: 15,
  },
  bursaryText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  awardedStatus: {
    backgroundColor: "#4CAF50", // Green for awarded
  },
  pendingStatus: {
    backgroundColor: "#FFA500", // Orange for pending
  },
  notAwardedStatus: {
    backgroundColor: "#A9A9A9", // Grey for not awarded
  },
});

export default AwardedBursaries;
