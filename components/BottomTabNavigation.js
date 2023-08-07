import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Dashbord/Home";
import Scan from "../screens/Dashbord/Scan";
import Profile from "../screens/Dashbord/Profile";
import { Ionicons } from "@expo/vector-icons";
import { themeColors } from "../theme";
import Setting from "../screens/Dashbord/Setting";
import Svg, { Path } from "react-native-svg";
import { TouchableOpacity, StyleSheet, View } from "react-native";

const Tab = createBottomTabNavigator();

const screenOptions = {
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  headerShown: false,
  tabBarStyle: {
    position: "absolute",
    // backgroundColor: "transparent",
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 60,
  },
};

const TabBarCustomBtn = ({
  // accessibilityLabel,
  accessibilityState,
  children,
  onPress,
}) => {
  var isSelected = accessibilityState.selected;

  if (isSelected) {
    return (
      <View style={{ flex: 1, alighItems: "center" }}>
        <View style={{ flexDirection: "row", position: "absolute", top: 0 }}>
          <View style={{ flex: 1, backgroundColor: themeColors.white }}></View>
          <Svg width={75} height={61} viewBox="0 0 75 61">
            <Path
              d="M75.2 0v61H0V0c4.1 0 7.4 3.1 7.9 7.1C10 21.7 22.5 33 37.7 33c15.2 0 27.7-11.3 29.7-25.9.5-4 3.9-7.1 7.9-7.1h-.1z"
              fill={themeColors.white}
            />
          </Svg>
          <View style={{ flex: 1, backgroundColor: themeColors.white }}></View>
        </View>
        <TouchableOpacity
          onPress={onPress}
          style={{
            top: -22.5,
            justifyContent: "center",
            alignItems: "center",
            width: 50,
            height: 50,
            borderRadius: 25,
            marginLeft: 25,
            backgroundColor: themeColors.secondary,
            ...styles.shadow,
          }}
        >
          {children}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: 50,
          height: 50,
          backgroundColor: themeColors.white,
        }}
        activeOpacity={1}
        onPress={onPress}
      >
        {children}
      </TouchableOpacity>
    );
  }
};

const BottomTabNavigation = () => {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={focused ? themeColors.primary : themeColors.gray}
              />
            );
          },
          tabBarButton: (props) => <TabBarCustomBtn {...props} />,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={Scan}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "scan" : "scan-outline"}
                size={24}
                color={focused ? themeColors.primary : themeColors.gray}
              />
            );
          },
          tabBarButton: (props) => <TabBarCustomBtn {...props} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={focused ? themeColors.primary : themeColors.gray}
              />
            );
          },
          tabBarButton: (props) => <TabBarCustomBtn {...props} />,
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <Ionicons
                name={focused ? "settings" : "settings-outline"}
                size={24}
                color={focused ? themeColors.primary : themeColors.gray}
              />
            );
          },
          tabBarButton: (props) => <TabBarCustomBtn {...props} />,
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  shadow: {
    shadowColor: themeColors.secondary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
});
export default BottomTabNavigation;
