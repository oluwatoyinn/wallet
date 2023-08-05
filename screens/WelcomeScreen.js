import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { themeColors } from "../theme"; 
import WelcomeBgSvg from "../assets/images/WelomeBgSvg";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView
      className="flex-1"
      style={{ backgroundColor: themeColors.bg }}
    >
      <View className="flex-1 justify-around my-4">
        <Text className="text-white font-bold text-4xl text-center">
          Welcome Back
        </Text>
      </View>
      <View className="flex-row justify-center">
        <WelcomeBgSvg />
      </View>
      <View className="mb-24">
        <TouchableOpacity
          className="py-3 mx-7 rounded-xl"
          style={{ backgroundColor: themeColors.secondary }}
          onPress={() => navigation.navigate("Register")}
        >
          <Text className="text-xl font-bold text-center text-white">
            Register
          </Text>
        </TouchableOpacity>
        <View className="flex-row justify-center mt-4">
          <Text className="text-white font-semibold mr-4">
            Already have an account
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              className="font-semibold text-white"
              style={{ color: themeColors.secondary }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
