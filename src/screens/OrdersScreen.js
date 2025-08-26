import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../components/Header";
import BottomNavBar from "../components/BottomNavBar";
const CardBanner = require('../../assets/womens_libido_capsules.jpg');

export default function OrdersScreen({ navigation }) {
  const orders = [
    {
      id: "34747",
      status: "Arriving",
      statusType: "arriving", // arriving / delivered
      date: "on 4/4/25",
      time: "",
      address: "Smaaklik Avenue, Kukhanya, Gauteng, 0087",
      product: {
        image:
          "https://via.placeholder.com/60", // replace with actual product image
        title: "Women's libido quick release 60 capsules",
        subtitle: "2 bottles    Qty: 2",
      },
      price: "R655",
      buttonText: "Track order",
    },
    {
      id: "34747",
      status: "Delivered",
      statusType: "delivered",
      date: "on 4/4/25",
      time: "at 5:16 p.m",
      address: "Smaaklik Avenue, Kukhanya, Gauteng, 0087",
      product: {
        image:
          "https://via.placeholder.com/60",
        title: "Women's libido quick release 60 capsules",
        subtitle: "2 bottles    Qty: 2",
      },
      price: "R655",
      buttonText: "Order Again",
    },

    {
      id: "34747",
      status: "Arriving",
      statusType: "arriving", // arriving / delivered
      date: "on 4/4/25",
      time: "",
      address: "Smaaklik Avenue, Kukhanya, Gauteng, 0087",
      product: {
        image:
          "https://via.placeholder.com/60", // replace with actual product image
        title: "Women's libido quick release 60 capsules",
        subtitle: "2 bottles    Qty: 2",
      },
      price: "R655",
      buttonText: "Track order",
    },
    {
      id: "34747",
      status: "Delivered",
      statusType: "delivered",
      date: "on 4/4/25",
      time: "at 5:16 p.m",
      address: "Smaaklik Avenue, Kukhanya, Gauteng, 0087",
      product: {
        image:
          "https://via.placeholder.com/60",
        title: "Women's libido quick release 60 capsules",
        subtitle: "2 bottles    Qty: 2",
      },
      price: "R655",
      buttonText: "Order Again",
    },
  ];

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"My Orders"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      {/* Filter Button */}
      <View style={tw`flex-row justify-end px-4 py-3`}>
        <TouchableOpacity
          style={tw`flex-row items-center`}
          onPress={() => console.log("Filter pressed")}
        >
          <Ionicons name="filter-outline" size={20} color="black" />
          <Text style={tw`ml-1 text-gray-700`}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Orders List */}
      <ScrollView contentContainerStyle={tw`px-4 pb-20`}>
        {orders.map((order, index) => (
          <View
            key={index}
            style={tw`bg-white border border-gray-200 rounded-lg p-4 mb-5`}
          >
            {/* Header Row (Status + Order ID) */}
            <View style={tw`flex-row justify-between items-center mb-3 border-b border-gray-200 pb-3`}>
              <View style={tw`flex-row items-start`}>
                {/* Icon */}
                {order.statusType === "arriving" ? (
                  <MaterialIcons
                    name="alarm"
                    size={24}
                    color="#FF9500"
                    style={tw`mr-3 mt-1`}
                  />
                ) : (
                  <Feather
                    name="check-circle"
                    size={24}
                    color="#34C759"
                    style={tw`mr-2 mt-1`}
                  />
                )}

                {/* Status + Date in column */}
                <View>
                  <Text
                    style={tw`font-semibold text-base ${order.statusType === "arriving"
                      ? "text-yellow-600"
                      : "text-green-600"
                      }`}
                  >
                    {order.status}
                  </Text>
                  <Text style={tw`text-gray-500 text-sm`}>
                    {order.date}
                  </Text>
                </View>
              </View>

              {/* Order ID */}
              <Text style={tw`text-gray-400 text-sm`}>Order Id: {order.id}</Text>
            </View>

            {/* Address Row */}
            <View style={tw`flex-row items-start mb-4`}>
              <Feather
                name="home"
                size={24}
                style={tw`mr-3 mt-1`}
              />
              <View>
                <Text
                  style={tw`font-semibold text-base`}
                >
                  Home
                </Text>
                <Text style={tw`text-gray-500 text-sm`}>
                  Smaaklik Avenue, Kukhanya, Gauteng, 0087
                </Text>
              </View>
            </View>

            {/* Product Row */}
            <View style={tw`flex-row items-center mb-4 border-b border-gray-200 pb-3`}>
              <Image
                source={CardBanner}
                style={tw`w-16 h-16 rounded-xl mr-4`}
              />
              <View style={tw`flex-1`}>
                <Text style={tw`text-gray-900 font-semibold text-base`}>
                  {order.product.title}
                </Text>
                <Text style={tw`text-gray-500 text-sm mt-1`}>
                  {order.product.subtitle}
                </Text>
              </View>
            </View>

            {/* Footer (Price + Action Button) */}
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-lg font-bold text-gray-900`}>{order.price}</Text>
              <TouchableOpacity
                style={tw`bg-red-500 px-6 py-3 rounded-lg`}
                onPress={() => console.log(order.buttonText)}
              >
                <Text style={tw`text-white font-semibold text-sm`}>
                  {order.buttonText}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>


      {/* Bottom Navigation */}
      {/* <BottomNavBar /> */}
    </View>
  );
}
