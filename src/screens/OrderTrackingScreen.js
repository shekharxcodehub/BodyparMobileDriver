import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from "react-native";
import tw from "twrnc";
import { colors } from "../theme/colors";

const OrderTrackingScreen = () => {
  const [status, setStatus] = useState("assigned");
  // "waiting", "assigned", "onTheWay", "delivered"

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      {/* Progress Bar */}
      <View style={tw`bg-[${colors.primary}] p-4`}>
        <Text style={tw`text-white text-lg font-bold`}>
          {status === "waiting" && "Estimated delivery Time 40 Mins"}
          {status === "assigned" && "Estimated delivery Time 35 Mins"}
          {status === "onTheWay" && "Estimated delivery Time 28 Mins"}
          {status === "delivered" && "Delivered in 40 Mins"}
        </Text>

        <View style={tw`flex-row justify-between mt-4`}>
          <Text style={tw`text-white`}>Order Placed</Text>
          <Text style={tw`text-white`}>On the way</Text>
          <Text style={tw`text-white`}>Delivered</Text>
        </View>
      </View>

      {/* State Based UI */}
      {status === "waiting" && (
        <View style={tw`items-center p-8`}>
          <Text style={tw`text-gray-600`}>
            We will assign a delivery partner soon
          </Text>
        </View>
      )}

      {status === "assigned" && (
        <View style={tw`p-4`}>
          <View style={tw`bg-white p-4 rounded-2xl shadow`}>
            <Text style={tw`text-lg font-bold`}>Jacob Elliot</Text>
            <Text style={tw`text-gray-500`}>ID: HC23459 ⭐ 4.8</Text>
            <Text style={tw`mt-2 text-gray-700`}>
              Address: Smaalik Avenue, Kuhkanya, Gauteng, 0087
            </Text>
          </View>
        </View>
      )}

      {status === "onTheWay" && (
        <View style={tw`p-4`}>
          <View style={tw`bg-white p-4 rounded-2xl shadow`}>
            <Text style={tw`text-lg font-bold`}>Jacob Elliot</Text>
            <Text style={tw`text-gray-500`}>ID: HC23459 ⭐ 4.8</Text>
            <Text style={tw`mt-4 text-gray-700`}>
              OTP to receive the order:
            </Text>
            <TextInput
              value="9807"
              editable={false}
              style={tw`bg-gray-100 p-3 mt-2 rounded-lg text-center font-bold text-lg tracking-widest`}
            />
          </View>
        </View>
      )}

      {status === "delivered" && (
        <View style={tw`p-4`}>
          <View style={tw`bg-white p-4 rounded-2xl shadow mb-4`}>
            <TouchableOpacity style={tw`py-3`}>
              <Text style={tw`text-[${colors.primary}] font-semibold`}>
                ⭐ Rate your products
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`py-3`}>
              <Text style={tw`text-[${colors.primary}] font-semibold`}>
                ❓ Need help with this order?
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      )}

      {/* Order Summary */}
      <View style={tw`mt-4 mx-4 bg-white rounded-2xl p-4 shadow`}>
        <Text style={tw`text-gray-400 text-sm`}>order id: 112313</Text>

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
    </ScrollView>
  );
};

export default OrderTrackingScreen;
