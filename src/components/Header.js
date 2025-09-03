import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, FontAwesome } from "@expo/vector-icons";
import tw from "twrnc";
import { colors } from "../theme/colors";

const Header = ({
  navigation,
  title,
  showBack = false,
  showSearch = false,
  showCart = false,
  cartCount
}) => {
  return (
    <View style={tw`flex-row items-center justify-between px-4 py-4 border-b border-gray-200`}>

      {/* Left Section */}
      <View style={tw`flex-row items-center`}>
        {showBack && (
          <TouchableOpacity onPress={() => navigation.goBack()} style={tw`mr-3`}>
            <Ionicons name="arrow-back" size={22} color="black" />
          </TouchableOpacity>
        )}
        <Text style={tw`text-lg font-semibold`}>{title}</Text>
      </View>

      {/* Right Section */}
      <View style={tw`flex-row items-center`}>
        {showSearch && (
          <TouchableOpacity style={tw`mr-4`}>
            <AntDesign name="search1" onPress={() => navigation.navigate("SearchScreen")} size={22} color="black" />
          </TouchableOpacity>
        )}
        {showCart && (
          <TouchableOpacity style={tw`relative`}>
            <FontAwesome name="shopping-cart" onPress={() => navigation.navigate("CartScreen")} size={22} color="black" />
            {cartCount > 0 && (
              <View
                style={tw`absolute -top-2 -right-2 bg-[${colors.primary}] rounded-full w-4 h-4 items-center justify-center`}
              >
                <Text style={tw`text-white text-[10px]`}>{cartCount}</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Header;
