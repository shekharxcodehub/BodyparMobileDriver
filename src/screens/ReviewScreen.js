import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import Header from "../components/Header";
import Image1 from "../../assets/womens_libido.jpg";
import Image2 from "../../assets/womens_libido_capsules.jpg";
import { colors } from "../theme/colors";

export default function ReviewScreen() {
  const navigation = useNavigation();
  const [review1, setReview1] = useState("");
  const [review2, setReview2] = useState("");
  const [review3, setReview3] = useState("");

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Rating and Review"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />
      <ScrollView style={tw`p-4`} showsVerticalScrollIndicator={false}>
        {/* Section 1 */}
        <View style={tw`bg-white border border-gray-300 rounded-xl p-3 mb-4`}>
          <View style={tw`flex-row items-center mb-3`}>
            <Image
              source={Image1}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View>
              <Text style={tw`text-base font-semibold mb-1`}>Rate delivery experience</Text>
              <Text style={tw`text-yellow-500`}>⭐️⭐️⭐️⭐️⭐️</Text>
            </View>
          </View>
          <TextInput
            placeholder="Write your suggestions and reviews"
            value={review1}
            onChangeText={setReview1}
            style={tw`border border-gray-300 rounded-lg mt-2 px-2 text-sm`}
            multiline={true}
            textAlignVertical="top"
          />
        </View>

        {/* Section 2 */}
        <View style={tw`bg-white border border-gray-300 rounded-xl p-3 mb-4`}>
          <View style={tw`flex-row items-center mb-3`}>
            <Image
              source={Image2}
              style={tw`w-10 h-10 rounded-full mr-3`}
            />
            <View>
              <Text style={tw`text-base font-semibold mb-1`}>How did you find your items?</Text>
              <Text style={tw`text-yellow-500`}>⭐️⭐️⭐️⭐️⭐️</Text>
            </View>
          </View>
          <TextInput
            placeholder="Write your suggestions and reviews"
            value={review2}
            onChangeText={setReview2}
            style={tw`border border-gray-300 rounded-lg mt-2 p-2 text-sm`}
            multiline={true}
            textAlignVertical="top"
          />
        </View>

        {/* Section 3 */}
        <View style={tw`bg-white border border-gray-300 rounded-xl p-3 mb-6`}>
          <Text style={tw`text-base font-semibold mb-2`}>Any other suggestions</Text>
          <TextInput
            placeholder="Write your suggestions and reviews"
            value={review3}
            onChangeText={setReview3}
            style={tw`border border-gray-300 rounded-lg p-2 text-sm`}
            multiline={true}
            textAlignVertical="top"
          />
        </View>

        {/* Submit button */}
        <TouchableOpacity
          onPress={() => navigation.navigate("ReviewSubmittedScreen")}
          style={tw`bg-[${colors.primary}] rounded-lg py-3`}
        >
          <Text style={tw`text-center text-white font-semibold text-base`}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
