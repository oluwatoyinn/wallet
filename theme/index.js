import { StyleSheet } from "react-native";

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const themeColors = {
  bg: "#004274",
  primary: "#004274",
  secondary: "#00a8a8",
  gray: "#494d80",
  white: "#fff",
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
