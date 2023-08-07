import React from "react";
import { View, ScrollView, TouchableOpacity, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";
import { themeColors } from "../../theme";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();
  return (
    <View
      className="flex-1 bg-white"
      // style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" p-1 ml-3"
          >
            <ArrowLongLeftIcon size="20" color="black"/>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className=" px-4 pt-4"
      >
        <View className="flex-1 px-8 pt-8 h-40 rounded-3xl" style={{backgroundColor: themeColors.secondary}}>
          <Text className="text-white text-lg font-bold">Hello</Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
