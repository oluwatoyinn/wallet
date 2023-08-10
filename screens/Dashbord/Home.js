import React, { useState } from "react";
import {
  View,
  ScrollView,
  TouchableOpacity,
  Text,
  FlatList,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLongLeftIcon } from "react-native-heroicons/solid";
import { themeColors, SIZES } from "../../theme";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { images } from "../../constants";

const data = [
  {
    id: 1,
    icon: <Ionicons name="phone-portrait" size={24} />,
    color: themeColors.yellow,
    backgroundColor: themeColors.lightYellow,
    description: "Airtime & Data",
  },
  {
    id: 1,
    icon: <Ionicons name="wallet" size={24} />,
    color: themeColors.green,
    backgroundColor: themeColors.lightGreen,
    description: "Create Account",
  },
  {
    id: 1,
    icon: <Ionicons name="send" size={24} />,
    color: themeColors.red,
    backgroundColor: themeColors.lightRed,
    description: "Send Money",
  },
  {
    id: 1,
    icon: <Ionicons name="apps" size={24} />,
    color: themeColors.purple,
    backgroundColor: themeColors.lightPurple,
    description: "More",
  },
];

const specialPromo = [
  {
    id: 1,
    img: images.family,
    title: "Family Saving",
    description: "Set up a family budget",
  },
  {
    id: 2,
    img: images.children,
    title: "Children Saving",
    description: "Set up a family budget",
  },
  {
    id: 3,
    img: images.target,
    title: "Target Saving",
    description: "Set up a family budget",
  },
  {
    id: 4,
    img: images.bonus,
    title: "Bonus CashBack",
    description: "Set up a family budget",
  },
];

const Home = () => {
  const navigation = useNavigation();
  const [dataFeatures, setDataFeatures] = useState(data);
  const [promos, setPromos] = useState(specialPromo);

  const renderingPromos = () => {
    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginVertical: SIZES.base,
          width: SIZES.width / 2.5,
        }}
        onPress={() => console.log(item.title)}
      >
        <View
          style={{
            height: 80,
            borderTopLeftRadius: 20,
            borderTopRightRadius: 20,
            backgroundColor: themeColors.primary,
          }}
        >
          <Image
            source={images.target}
            resizeMode="cover"
            style={{
              width: "100%",
              height: "100%",
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,
            }}
          />
        </View>
        <View
          style={{
            padding: SIZES.padding,
            backgroundColor: themeColors.lightGray,
            borderBottomLeftRadius: 20,
            borderBottomRightRadius: 20,
          }}
        >
          <Text className="font-bold text-center"> {item.title} </Text>
          <Text className="text-center"> {item.description} </Text>
        </View>
      </TouchableOpacity>
    );

    return (
      <FlatList
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={specialPromo}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
      />
    );
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-row justify-start">
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className=" p-1 ml-3"
        >
          <ArrowLongLeftIcon size="20" color="black" />
        </TouchableOpacity>
      </View>
      {renderingPromos()}
    </SafeAreaView>
  );
};

export default Home;
