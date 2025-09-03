import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  LayoutAnimation,
  UIManager,
  Platform,
} from "react-native";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../components/Header";
import { OrdersFilterBottomSheet } from "../components/bottomSheets/OrdersFilterBottomSheet";
import { colors } from "../theme/colors";

const CardBanner = require("../../assets/womens_libido_capsules.jpg");

// Enable LayoutAnimation for Android
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental &&
  !global.nativeFabricUIManager // 👈 skip if Fabric is enabled
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function OrdersScreen({ navigation }) {
  const [expandedOrderId, setExpandedOrderId] = useState(null);

  const orders = [
    {
      id: "34747",
      status: "Arriving",
      statusType: "arriving",
      date: "on 4/4/25",
      time: "",
      address: "Smaaklik Avenue, Kukhanya, Gauteng, 0087",
      product: {
        image: "https://via.placeholder.com/60",
        title: "Women's libido quick release 60 capsules",
        subtitle: "2 bottles    Qty: 2",
      },
      items: [
        {
          image: "https://via.placeholder.com/60",
          title: "Women's libido quick release 60 capsules",
          subtitle: "Pack of 2 bottles",
          qty: 1,
        },
        {
          image: "https://via.placeholder.com/60",
          title: "Women's libido quick release 60 capsules",
          subtitle: "Pack of 2 bottles",
          qty: 2,
        },
        {
          image: "https://via.placeholder.com/60",
          title: "Women's libido quick release 60 capsules",
          subtitle: "Pack of 2 bottles",
          qty: 2,
        },
      ],
      price: "R655",
      buttonText: "Track order",
    },
    {
      id: "34748",
      status: "Delivered",
      statusType: "delivered",
      date: "on 4/4/25",
      time: "at 5:16 p.m",
      address: "Smaaklik Avenue, Kukhanya, Gauteng, 0087",
      product: {
        image: "https://via.placeholder.com/60",
        title: "Women's libido quick release 60 capsules",
        subtitle: "2 bottles    Qty: 2",
      },
      items: [
        {
          image: "https://via.placeholder.com/60",
          title: "Women's libido quick release 60 capsules",
          subtitle: "Pack of 2 bottles",
          qty: 1,
        },
      ],
      price: "R655",
      buttonText: "Order Again",
    },
  ];

  // Filter Bottom Sheet Ref
  const filterBottomSheetRef = useRef(null);

  // Handle filter application
  const handleApplyFilter = (filterType) => {
    console.log("Applying filter:", filterType);
    // TODO: Add filter logic
  };

  const toggleExpand = (id) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setExpandedOrderId(expandedOrderId === id ? null : id);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Order History"}
        showBack={true}
        showSearch={true}
        showCart={true}
        cartCount={3}
      />

      {/* Filter Button */}
      <View style={tw`flex-row justify-end px-4 py-3`}>
        <TouchableOpacity
          style={tw`flex-row items-center`}
          onPress={() => filterBottomSheetRef.current?.present()}
        >
          <Ionicons name="filter-outline" size={20} color="black" />
          <Text style={tw`ml-1 text-gray-700`}>Filter</Text>
        </TouchableOpacity>
      </View>

      {/* Orders List */}
      <ScrollView
        contentContainerStyle={tw`px-4 pb-20`}
        showsVerticalScrollIndicator={false}
      >
        {orders.map((order) => (
          <View
            key={order.id}
            style={tw`bg-white border border-gray-200 rounded-lg p-4 mb-5`}
          >
            {/* Header Row (Status + Order ID) */}
            <TouchableOpacity
              onPress={() => toggleExpand(order.id)}
              style={tw`flex-row justify-between items-center mb-3 border-b border-gray-200 pb-3`}
            >
              <View style={tw`flex-row items-start`}>
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
                <View>
                  <Text
                    style={tw`font-semibold text-base ${order.statusType === "arriving"
                      ? "text-yellow-600"
                      : "text-green-600"
                      }`}
                  >
                    {order.status}
                  </Text>
                  <Text style={tw`text-gray-500 text-sm`}>{order.date}</Text>
                </View>
              </View>
              <Text style={tw`text-gray-400 text-sm`}>
                Order Id: {order.id}
              </Text>
            </TouchableOpacity>

            {/* Address Row */}
            <View style={tw`flex-row items-start mb-4`}>
              <Feather name="home" size={24} style={tw`mr-3 mt-1`} />
              <View>
                <Text style={tw`font-semibold text-base`}>Home</Text>
                <Text style={tw`text-gray-500 text-sm`}>{order.address}</Text>
              </View>
            </View>

            {/* Product Row (Default View) */}
            <View
              style={tw`flex-row items-center mb-4 border-b border-gray-200 pb-3`}
            >
              <Image source={CardBanner} style={tw`w-16 h-16 rounded-xl mr-4`} />
              <View style={tw`flex-1`}>
                <Text style={tw`text-gray-900 font-semibold text-base`}>
                  {order.product.title}
                </Text>
                <Text style={tw`text-gray-500 text-sm mt-1`}>
                  {order.product.subtitle}
                </Text>
              </View>
            </View>

            {/* Expanded Items */}
            {expandedOrderId === order.id && order.items && (
              <View style={tw`mb-4`}>
                <Text style={tw`font-semibold mb-2`}>
                  Order Items ({order.items.length})
                </Text>
                {order.items.map((item, index) => (
                  <View key={index} style={tw`flex-row items-center mb-3`}>
                    <Image
                      source={{ uri: item.image }}
                      style={tw`w-14 h-14 rounded-lg mr-3`}
                    />
                    <View style={tw`flex-1`}>
                      <Text style={tw`text-gray-900 text-sm font-medium`}>
                        {item.title}
                      </Text>
                      <Text style={tw`text-gray-500 text-xs`}>
                        {item.subtitle}
                      </Text>
                    </View>
                    <Text style={tw`text-gray-700 text-sm font-semibold`}>
                      x{item.qty}
                    </Text>
                  </View>
                ))}
              </View>
            )}

            {/* Footer (Price + Action Button) */}
            <View style={tw`flex-row justify-between items-center`}>
              <Text style={tw`text-lg font-bold text-gray-900`}>
                {order.price}
              </Text>
              <TouchableOpacity
                style={tw`bg-[${colors.primary}] px-6 py-3 rounded-lg`}
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

      {/* Filter Bottom Sheet */}
      <OrdersFilterBottomSheet
        ref={filterBottomSheetRef}
        onApplyFilter={handleApplyFilter}
      />
    </View>
  );
}
