import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import LoginScreen from "./app/screens/LoginScreen";
import HomeScreen from "./app/screens/HomeScreen";
import StudentInfo from "./app/screens/StudentInfo";
import AvailableBursaries from "./app/screens/AvailableBursaries";
import AwardedBursaries from "./app/screens/AwardedBursaries";
import PersonalQuestions from "./app/screens/PersonalQuestions";

const Stack = createStackNavigator();

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
        <Stack.Screen
          name="AwardedBursaries"
          component={AwardedBursaries}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="PersonalQuestions"
          component={PersonalQuestions}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
