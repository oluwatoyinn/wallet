import { NavigationContainer } from "@react-navigation/native";
import React from "react";
// import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BottomTabNavigation from "../components/BottomTabNavigation";

const Stack = createNativeStackNavigator();

const DashBoard = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bottom Navigation"
        component={BottomTabNavigation}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default DashBoard;
