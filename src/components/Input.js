import React from "react";
import { TextInput, View, Text } from "react-native";
import tw from "twrnc";

export default function Input({ label, error, ...props }) {
  return (
    <View style={tw`mb-3`}>
      {label ? <Text style={tw`mb-1 font-semibold text-gray-800`}>{label}</Text> : null}
      <TextInput
        style={tw.style(
          "border rounded-lg px-3 py-2",
          error ? "border-red-500" : "border-gray-300"
        )}
        {...props}
      />
      {error ? <Text style={tw`text-red-500 mt-1 text-sm`}>{error}</Text> : null}
    </View>
  );
}
