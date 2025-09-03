import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import { colors } from "../theme/colors";

export default function ReviewSubmittedScreen() {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={""}
        showBack={false}
        showSearch={false}
        showCart={false}
      />
      <View style={tw`flex-1 bg-white justify-center items-center p-6`}>
        {/* Big Tick Circle */}
        <View style={tw`w-24 h-24 bg-[${colors.primary}] bg-opacity-30 rounded-full justify-center items-center mb-6`}>
          <Text style={tw`text-5xl text-[${colors.primary}]`}>✓</Text>
        </View>

        {/* Message */}
        <Text style={tw`text-lg font-bold mb-1`}>Review submitted</Text>
        <Text style={tw`text-gray-500 mb-8 text-center`}>
          Your review has been submitted
        </Text>

        {/* Done button */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={tw`bg-[${colors.primary}] rounded-lg py-3 w-full`}
        >
          <Text style={tw`text-center text-white font-semibold text-base`}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
