import React from "react";
import { TouchableOpacity, Text } from "react-native";
import tw from "twrnc";

export default function Button({ title, onPress, disabled }) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={tw.style(
        "bg-blue-600 py-3 rounded-xl items-center",
        disabled && "opacity-60"
      )}
    >
      <Text style={tw`text-white font-semibold text-base`}>{title}</Text>
    </TouchableOpacity>
  );
}
