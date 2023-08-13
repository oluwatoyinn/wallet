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

  const renderHeader = () => {
    return (
      <View style={{ flexDirection: "row", marginVertical: SIZES.padding * 2 }}>
        <View style={{ flex: 1 }}>
          <Text className="font-extrabold text-2xl"> Hello!</Text>
          <Text className="text-gray-400 font-medium"> Victor Ajayi</Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: "center",
              alignItems: "center",
              // backgroundColor: themeColors.lightGray,
            }}
          >
            <Ionicons name="notifications" size={24} />
            <View
              style={{
                position: "absolute",
                top: -5,
                right: -5,
                height: 10,
                width: 10,
                backgroundColor: themeColors.red,
                borderRadius: 5,
              }}
            ></View>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const renderHeaderBanner = () => {
    return (
      <View
        style={{
          height: 140,
          borderRadius: 20,
          backgroundColor: themeColors.secondary,
          padding: SIZES.padding,
        }}
      >
        <Text className="text-white text-lg font-bold">Hello</Text>
      </View>
    );
  };

  const renderFeatures = () => {
    const Header = () => (
      <View style={{ marginBottom: SIZES.padding * 2 }}>
        <Text className="font-extrabold text-2xl"> Features</Text>
      </View>
    );

    const renderItem = ({ item }) => (
      <TouchableOpacity
        style={{
          marginBottom: SIZES.padding * 2,
          width: 60,
          alignItems: "center",
        }}
        onPress={() => console.log(item.description)}
      >
        <View
          style={{
            height: 50,
            width: 50,
            marginBottom: 5,
            borderRadius: 20,
            backgroundColor: item.backgroundColor,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {item.icon}
        </View>
        <Text className="text-center flex-wrap"> {item.description} </Text>
      </TouchableOpacity>
    );
    return (
      <FlatList
        ListHeaderComponent={Header}
        data={dataFeatures}
        numColumns={4}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        style={{ marginTop: SIZES.padding * 2 }}
      />
    );
  };

  const renderPromosHeader = () => (
    <View style={{ flexDirection: "row", marginBottom: SIZES.padding }}>
      <View style={{ flex: 1 }}>
        <Text className="font-extrabold text-2xl">Special Promo</Text>
      </View>
    </View>
  );

  const renderingPromos = () => {
    const HeaderComponent = () => (
      <View>
        {renderHeader()}
        {renderHeaderBanner()}
        {renderFeatures()}
        {renderPromosHeader()}
      </View>
    );

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
            source={item.img}
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
        ListHeaderComponent={HeaderComponent}
        contentContainerStyle={{ paddingHorizontal: SIZES.padding * 3 }}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        data={promos}
        keyExtractor={(item) => `${item.id}`}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        ListFooterComponent={<View style={{ marginBottom: 80 }}></View>}
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
