import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import StudentInfo from "./app/screens/StudentInfo";
import AvailableBursaries from "./app/screens/AvailableBursaries";

import firebase from "@react-native-firebase/app";
import "@react-native-firebase/auth";
import "@react-native-firebase/firestore";

const Stack = createStackNavigator();

const firebaseConfig = {
  apiKey: "AIzaSyAxC9hJnVMPTeuON4zecuV_Jsfq9w8gHlk",
  authDomain: "easybursary2.firebaseapp.com",
  projectId: "easybursary2",
  storageBucket: "easybursary2.appspot.com",
  messagingSenderId: "832523690056",
  appId: "1:832523690056:web:7915900a12bad93bd9787d",
  measurementId: "G-E915LBY2Y5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="StudentInfo"
          component={StudentInfo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="AvailableBursaries"
          component={AvailableBursaries}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
