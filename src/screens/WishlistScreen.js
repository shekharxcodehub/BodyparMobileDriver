import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import tw from "twrnc";
import { Ionicons } from "@expo/vector-icons";
import BottomNavBar from "../components/BottomNavBar";
import Header from "../components/Header"; // ✅ use new Header

const wishlistItems = [
  { id: "1", name: "Women's Libido, 60 Quick Release Capsules", price: "R120", oldPrice: "R140", discount: "5%", quantity: "2 bottles", image: require("../../assets/womens_libido.jpg") },
  { id: "2", name: "Men's Vitality, 90 Capsules", price: "R180", oldPrice: "R200", discount: "10%", quantity: "1 bottle", image: require("../../assets/womens_libido.jpg") },
];

export default function WishlistScreen({ navigation }) {
  const renderWishlistItem = ({ item }) => (
    <View style={[tw`bg-white rounded-lg p-3 mb-4`, { flex: 1, marginHorizontal: 6 }]}>
      <Image source={item.image} style={[tw`w-full h-32 mb-2`]} resizeMode="contain" />
      <Text style={tw`text-sm font-semibold mb-1`} numberOfLines={2}>{item.name}</Text>
      <Text style={tw`text-xs text-gray-500 mb-2`}>{item.quantity}</Text>
      <View style={tw`flex-row items-center mb-2`}>
        <Text style={tw`text-base font-bold text-black mr-2`}>{item.price}</Text>
        <Text style={tw`text-sm text-gray-400 line-through mr-2`}>{item.oldPrice}</Text>
        <Text style={tw`text-sm text-green-600`}>{item.discount}</Text>
      </View>
      <TouchableOpacity style={[tw`flex-row items-center justify-center bg-red-400 rounded-lg`, { height: 36 }]}>
        <Ionicons name="cart-outline" size={18} color="white" style={tw`mr-2`} />
        <Text style={tw`text-white text-sm font-medium`}>Add to Cart</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={`Wishlist (${wishlistItems.length})`}
        showBack={true}
        showSearch={true}
        showCart={true}
        cartCount={3}
      />

      {/* Wishlist Grid */}
      <FlatList
        data={wishlistItems}
        renderItem={renderWishlistItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={tw`p-3`}
        showsVerticalScrollIndicator={false}
      />

      {/* Bottom Nav */}
      {/* <BottomNavBar /> */}
    </View>
  );
}
