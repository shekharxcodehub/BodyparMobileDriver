import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import tw from "twrnc";
import { colors } from "../theme/colors";

export default function ProductCard({
  product,
  onPress,
  onAddToCart,
  onAddToWishlist,
  border = false,
  style
}) {
  return (
    <TouchableOpacity
      style={[
        tw`bg-white rounded-xl p-3`,
        border ? tw`border border-gray-300` : null,
        style
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      {/* Product Image */}
      <Image
        source={product.image}
        style={tw`w-full h-36 rounded-lg`}
        resizeMode="contain"
      />

      {/* Product Name */}
      <Text
        style={[
          tw`text-sm font-semibold my-2`,
          { height: 30, lineHeight: 18 },
        ]}
        numberOfLines={2}
      >
        {product.name}
      </Text>

      {/* Quantity */}
      <Text style={tw`text-xs text-gray-500 mb-2`}>{product.qty}</Text>

      {/* Price Section */}
      <View style={tw`flex-row items-center mb-2`}>
        <Text style={tw`text-base font-bold text-black mr-2`}>
          {product.price}
        </Text>
        <Text style={tw`text-sm text-gray-400 line-through mr-2`}>
          {product.oldPrice}
        </Text>
        <Text style={tw`text-sm text-green-600`}>{product.discount}</Text>
      </View>

      {/* Action Row */}
      <View style={tw`flex-row items-center`}>
        {/* Wishlist Button */}
        <TouchableOpacity
          onPress={onAddToWishlist}
          style={[
            tw`rounded-lg border border-gray-300 items-center justify-center mr-2`,
            { width: 40, height: 40 },
          ]}
        >
          <MaterialCommunityIcons name="heart-plus" size={24} color="#FF6B6B" />
        </TouchableOpacity>

        {/* Add to Cart Button */}
        <TouchableOpacity
          onPress={onAddToCart}
          style={[
            tw`flex-1 bg-[${colors.primary}] rounded-lg items-center justify-center`,
            { height: 40 },
          ]}
        >
          <Text style={tw`text-white text-sm font-medium`}>Add to Cart</Text>
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}
