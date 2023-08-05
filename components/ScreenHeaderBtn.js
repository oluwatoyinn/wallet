import React from "react";
import { TouchableOpacity, Image } from "react-native";
import { themeColors, screenHeaderBtnStyles } from "../theme";


const ScreenHeaderBtn = ({ iconUrl, dimension, handlePress }) => {
  return (
    <TouchableOpacity style={screenHeaderBtnStyles.btnContainer} onPress={handlePress}>
      <Image
        source={iconUrl}
        resizeMode="cover"
        style={screenHeaderBtnStyles.btnImg(dimension)}
      />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
