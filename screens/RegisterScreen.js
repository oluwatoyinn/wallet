import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  Modal,
  TouchableWithoutFeedback,
  FlatList,
  ScrollView,
} from "react-native";
import { SIZES, themeColors } from "../theme";
import { ArrowLongLeftIcon, ChevronDownIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import RegisterSvgComponent from "./../assets/images/RegisterBgSvg";
import { images } from "../constants";
import axios from "axios";

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [areas, setAreas] = useState([]);
  const [selectedArea, setSelectedArea] = useState(null);
  const [modal, setModal] = useState(false);

  const getCountries = async () => {
    const response = await axios.get("https://restcountries.com/v3.1/all");
    const dataNeeded = response?.data?.map((item) => {
      return {
        code: item?.cioc,
        name: item?.name?.common,
        callingCode: `${item?.idd?.root}`,
        flag: item?.flags?.png,
      };
    });
    setAreas(dataNeeded);

    if (dataNeeded?.length > 0) {
      let defaultData = dataNeeded?.filter((a) => a.code === "NGR");
      if (defaultData?.length > 0) {
        setSelectedArea(defaultData[0]);
      }
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  console.log({ selectedArea });

  const rendalCountryCodeModal = () => {
    const renderItem = ({ item }) => {
      return (
        <TouchableOpacity
          style={{ padding: SIZES.padding, flexDirection: "row" }}
          onPress={() => {
            setSelectedArea(item);
            setModal(false);
          }}
        >
          <Image
            source={{ uri: item.flag }}
            style={{ width: 50, height: 27, marginRight: 10 }}
          />
          <Text style={{ color: themeColors.white }}> {item.name} </Text>
        </TouchableOpacity>
      );
    };
    return (
      <Modal animationType="slide" transparent={true} visible={modal}>
        <TouchableWithoutFeedback onPress={() => setModal(false)}>
          <View
            style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
          >
            <View
              style={{
                height: 400,
                width: SIZES.width * 0.8,
                backgroundColor: themeColors.secondary,
                borderRadius: SIZES.radius,
              }}
            >
              <FlatList
                data={areas}
                renderItem={renderItem}
                keyExtractor={(item) => item.code}
                showsVerticalScrollIndicator={false}
                style={{
                  padding: SIZES.padding * 2,
                  marginBottom: SIZES.padding * 2,
                }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    );
  };

  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className=" p-1 ml-4"
          >
           <ArrowLongLeftIcon size="20" color="white" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <RegisterSvgComponent />
        </View>
      </SafeAreaView>
      <ScrollView
        showsVerticalScrollIndicator={false}
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
          <Text className="text-gray-700 ml-4 font-bold">Phone Number</Text>
          <View style={{ flexDirection: "row" }}>
            {/* country code */}
            <TouchableOpacity
              style={{
                width: 100,
                height: 50,
                marginHorizontal: 5,
                borderBottomColor: themeColors.gray,
                borderBottomWidth: 2,
                flexDirection: "row",
              }}
              onPress={() => setModal(true)}
            >
              <View style={{ justifyContent: "center" }}>
                <ChevronDownIcon
                  size="15"
                  color="black"
                  style={{ width: 10, height: 10, borderBottomColor: "20px" }}
                />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Image
                  source={{ uri: selectedArea?.flag }}
                  resizeMode="contain"
                  style={{ width: 20, height: 30 }}
                />
              </View>
              <View style={{ justifyContent: "center", marginLeft: 5 }}>
                <Text> {selectedArea?.callingCode} </Text>
              </View>
            </TouchableOpacity>
            <TextInput
              style={{
                flex: 1,
                marginVertical: 12,
                borderBottomColor: themeColors.gray,
                borderBottomWidth: 1,
                height: 37,
                color: "blue",
              }}
              value=""
              placeholder="Enter Phone Number"
              placeholderTextColor={themeColors.gray}
            />
          </View>
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
      </ScrollView>
      {rendalCountryCodeModal()}
    </View>
  );
};

export default RegisterScreen;
