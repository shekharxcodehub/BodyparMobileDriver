import React from "react";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";
import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../components/Header";

const products = [
  {
    id: "1",
    name: "Women's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/mens_libido.png'),
  },
  {
    id: "2",
    name: "Men's Libido, 60 Quick Release Capsules",
    qty: "2 bottles",
    price: "R120",
    oldPrice: "R140",
    discount: "5%",
    image: require('../../assets/womens_libido.jpg'),
  },
];

const repeatedProducts = Array.from({ length: 10 }, (_, i) =>
  products.map((p) => ({ ...p, id: p.id + "-copy-" + i }))
).flat();

export default function ProductListingScreen({ navigation }) {
  const renderProduct = ({ item }) => (
    <View style={tw`w-1/2 p-2`}>
      <TouchableOpacity
        style={tw`bg-white rounded-xl p-3 shadow-sm`}
        onPress={() => navigation.navigate("ProductDetailsScreen", { product: item })}
        activeOpacity={0.8}
      >
        {/* Product Image */}
        <Image
          source={item.image}
          style={tw`w-full h-36 rounded-lg`}
          resizeMode="contain"
        />

        {/* Product Name */}
        <Text style={tw`text-sm font-semibold my-2`} numberOfLines={2}>
          {item.name}
        </Text>

        {/* Quantity */}
        <Text style={tw`text-xs text-gray-500 mb-2`}>{item.qty}</Text>

        {/* Price Section */}
        <View style={tw`flex-row items-center mb-2`}>
          <Text style={tw`text-base font-bold text-black mr-2`}>{item.price}</Text>
          <Text style={[tw`text-sm text-gray-400 line-through mr-2`]}>R499</Text>
          <Text style={tw`text-sm text-green-600`}>5%</Text>
        </View>

        {/* Action Row */}
        <View style={tw`flex-row items-center`}>
          <TouchableOpacity
            style={[tw`rounded-lg border border-gray-300 items-center justify-center mr-2`, { width: 40, height: 40 }]}
          >
            <MaterialCommunityIcons name="heart-plus" size={24} color="#FF6B6B" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[tw`flex-1 bg-red-400 rounded-lg items-center justify-center`, { height: 40 }]}
          >
            <Text style={tw`text-white text-sm font-medium`}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    </View >
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Product Listing"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      {/* Product Grid */}
      <FlatList
        data={repeatedProducts}
        renderItem={renderProduct}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={tw`p-2`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
