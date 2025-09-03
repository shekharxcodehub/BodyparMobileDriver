import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import tw from "twrnc";
import { colors } from "../theme/colors";

const OrderReceivedScreen = ({ navigation }) => {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      {/* Check Icon */}
      <View style={tw`items-center mt-20`}>
        <View style={tw`bg-[${colors.primary}] bg-opacity-30 rounded-full p-8`}>
          <Text style={tw`text-[${colors.primary}] text-6xl`}>✔</Text>
        </View>
        <Text style={tw`text-lg font-bold mt-4`}>Yay! Order Received</Text>
        <Text style={tw`text-gray-500 text-center mt-1`}>
          Home: Smaalik Avenue, Kuhkanya, Gauteng, 0087
        </Text>
      </View>

      {/* Order Summary */}
      <View style={tw`mt-8 mx-4 bg-white rounded-2xl p-4 shadow`}>
        <Text style={tw`text-gray-400 text-sm`}>order id: 112313</Text>

        {/* Product Item */}
        <View style={tw`mt-4`}>
          <View style={tw`flex-row justify-between items-center mb-2`}>
            <Text style={tw`text-gray-700`}>
              Women’s Bido quick release 60 capsules {"\n"}Qty 2
            </Text>
            <Text style={tw`text-gray-800 font-semibold`}>R240</Text>
          </View>
          <View style={tw`flex-row justify-between items-center`}>
            <Text style={tw`text-gray-700`}>
              Women’s Bido quick release 60 capsules {"\n"}Qty 2
            </Text>
            <Text style={tw`text-gray-800 font-semibold`}>R240</Text>
          </View>
        </View>

        <View style={tw`mt-4 border-t pt-2 flex-row justify-between`}>
          <Text style={tw`text-gray-700 font-semibold`}>Total amount</Text>
          <Text style={tw`text-green-600 font-bold`}>PAID R580</Text>
        </View>
      </View>

      {/* Track Order Button */}
      <TouchableOpacity
        style={tw`mx-4 my-8 bg-[${colors.primary}] p-4 rounded-2xl`}
        onPress={() => navigation.navigate("OrderTracking")}
      >
        <Text style={tw`text-white text-center font-bold text-lg`}>
          Track Order
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default OrderReceivedScreen;
