import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { themeColors } from "../theme";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import RegisterSvgComponent from "./../assets/images/RegisterBgSvg";

const RegisterScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="bg-white p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <RegisterSvgComponent />
        </View>
      </SafeAreaView>
      <View
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <View className="form space-y-2">
          <Text className="text-gray-700 ml-4 font-bold">Full Name</Text>
          <TextInput
            className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-4"
            value=""
            placeholder="Enter Full Name"
          />
          <Text className="text-gray-700 ml-4 font-bold">Email Address</Text>
          <TextInput
            className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-4"
            value=""
            placeholder="Enter Email"
          />
          <Text className="text-gray-700 ml-4 font-bold">Password</Text>
          <TextInput
            secureTextEntry
            className="p-4 bg-gray-200 text-gray-700 rounded-2xl mb-7"
            value=""
            placeholder="Enter Password"
          /> 
          <TouchableOpacity
            className="py-3 rounded-xl"
            style={{ backgroundColor: themeColors.primary }}
          >
            <Text className="text-white text-xl font-bold text-center">
              Register
            </Text>
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mt-4">
          <Text className=" font-semibold mr-4">Already have an account ?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text
              className="font-semibold text-white"
              style={{ color: themeColors.primary }}
            >
              Log In
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default RegisterScreen;
