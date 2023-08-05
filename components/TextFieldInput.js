import React from "react";
import { TextInput, View,Text } from "react-native";

const TextFieldInput = ({ label, value, placeholder, onChange }) => {
  return (
    <View>
      <Text className="ml-4 font-bold text-red-500"> {label} </Text>
      <TextInput
        className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </View>
  );
};

export default TextFieldInput;
