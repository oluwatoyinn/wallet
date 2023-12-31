import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const SIZES = {
  padding: 10,
  padding2: 12,
  font: 14,
  base: 8,
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
  radius: 30,
  width,
  height,
};

const themeColors = {
  bg: "#00325B",
  primary: "#00325B",
  secondary: "#006399",
  gray: "#494d80",
  lightGray: "#D3D3D3",
  white: "#fff",
  yellow: "#FFFF00",
  lightYellow: "#FFAC33",
  red: "#FF0000",
  lightRed: "#FF3333",
  purple: "#800080",
  lightPurple: "#9B59B6",
  green: "#008000",
  lightGreen: "#00C957",
};

const screenHeaderBtnStyles = StyleSheet.create({
  btnContainer: {
    width: 40,
    height: 40,
    backgroundColor: themeColors.white,
    borderRadius: SIZES.small / 1.25,
    justifyContent: "center",
    alignItems: "center",
  },

  btnImg: (dimension) => ({
    width: dimension,
    height: dimension,
    borderRadius: SIZES.small / 1.25,
  }),
});

export { themeColors, screenHeaderBtnStyles, SIZES };
