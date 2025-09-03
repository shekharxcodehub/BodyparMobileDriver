import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Modal, TextInput, ScrollView } from "react-native";
import tw from "twrnc";
import { AntDesign } from "@expo/vector-icons";
import Header from "../components/Header";
import Image1 from "../../assets/mens_libido.png"
import { colors } from "../theme/colors";

const CartScreen = ({ navigation }) => {
  const [cart, setCart] = useState([
    { id: "1", name: "Honey Goat Weed 12g", price: 225, qty: 1, image: Image1 },
    { id: "2", name: "Honey Goat Weed 12g (extra)", price: 225, qty: 1, image: Image1 },
  ]);
  const [showRemove, setShowRemove] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const handleRemove = () => {
    setCart(cart.filter((i) => i.id !== selectedItem.id));
    setShowRemove(false);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Your Cart"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      {/* CASE 1: Empty Cart */}
      {cart.length === 0 ? (
        <ScrollView contentContainerStyle={tw`flex-1 justify-center items-center p-6`} showsVerticalScrollIndicator={false}>
          <Image source={{ uri: "https://cdn-icons-png.flaticon.com/512/2038/2038854.png" }} style={tw`w-32 h-32`} />
          <Text style={tw`text-lg font-medium mt-4 text-gray-700`}>Your Cart is empty</Text>

          {/* Reorder Section */}
          <Text style={tw`mt-6 mb-2 text-base font-semibold self-start`}>Reorder</Text>
          <FlatList
            horizontal
            data={[
              { id: "r1", name: "Vitamin C", price: 150, image: "https://via.placeholder.com/80" },
              { id: "r2", name: "Omega 3", price: 300, image: "https://via.placeholder.com/80" },
            ]}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={tw`bg-white p-3 rounded-lg border mr-3 w-28`}>
                <Image source={item.image} style={tw`w-20 h-20 mx-auto`} />
                <Text style={tw`text-xs mt-2 font-medium`}>{item.name}</Text>
                <Text style={tw`text-xs text-gray-600`}>₹{item.price}</Text>
                <TouchableOpacity style={tw`bg-[${colors.primary}] rounded mt-2`}>
                  <Text style={tw`text-white text-xs text-center py-1`}>Add</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </ScrollView>
      ) : (
        <>
          {/* CASE 2: Cart List */}
          <ScrollView style={tw`flex-1 p-4`} showsVerticalScrollIndicator={false}>
            {/* Delivery Section */}
            <View style={tw`bg-white border rounded-lg p-3 mb-3 border-gray-200`}>
              <Text style={tw`text-sm font-medium`}>Deliver to</Text>
              <Text style={tw`text-xs text-gray-600 mt-1`}>
                11 Park Street, Mumbai, Maharashtra
              </Text>
            </View>

            {/* Items */}
            {cart.map((item) => (
              <View key={item.id} style={tw`flex-row justify-between items-center border-b border-gray-200 py-3`}>
                <Image source={item.image} style={tw`w-14 h-14 rounded`} />
                <View style={tw`flex-1 px-3`}>
                  <Text style={tw`font-medium`}>{item.name}</Text>
                  <Text style={tw`text-sm text-gray-500`}>₹{item.price}</Text>
                </View>
                {/* Qty + Remove */}
                <TouchableOpacity
                  style={tw`bg-gray-100 border border-gray-200 px-2 py-1 rounded`}
                  onPress={() => {
                    setSelectedItem(item);
                    setShowRemove(true);
                  }}
                >
                  <Text style={tw`text-xs text-[${colors.primary}]`}>Remove</Text>
                </TouchableOpacity>
              </View>
            ))}

            {/* Coupon Input */}
            <View style={tw`flex-row items-center mt-4`}>
              <TextInput
                placeholder="Enter coupon code"
                style={tw`flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm`}
              />
              <TouchableOpacity style={tw`bg-[${colors.primary}] px-4 py-2 rounded-lg ml-2`}>
                <Text style={tw`text-white text-sm`}>Apply</Text>
              </TouchableOpacity>
            </View>

            {/* Bill Summary */}
            <View style={tw`bg-white border rounded-lg p-3 mt-4 border-gray-200`}>
              <Text style={tw`font-medium text-sm mb-2`}>Bill Summary</Text>
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-sm`}>Subtotal</Text>
                <Text style={tw`text-sm`}>₹{subtotal}</Text>
              </View>
              <View style={tw`flex-row justify-between`}>
                <Text style={tw`text-sm`}>Discount</Text>
                <Text style={tw`text-sm text-green-600`}>- ₹20</Text>
              </View>
              <View style={tw`flex-row justify-between mt-1`}>
                <Text style={tw`text-base font-semibold`}>Total</Text>
                <Text style={tw`text-base font-semibold`}>₹{subtotal - 20}</Text>
              </View>
            </View>
          </ScrollView>

          {/* Footer */}
          <View style={tw`p-4 border-t border-gray-200 bg-white`}>
            <View style={tw`flex-row justify-between items-center mb-3`}>
              <Text style={tw`text-lg font-semibold`}>₹{subtotal - 20}</Text>
              <TouchableOpacity style={tw`bg-[${colors.primary}] px-6 py-3 rounded-lg`}>
                <Text style={tw`text-white font-medium`}>Proceed to Pay</Text>
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}

      {/* CASE 3: Remove Confirmation Modal */}
      <Modal visible={showRemove} transparent animationType="fade">
        <View style={tw`flex-1 bg-black/50 justify-center items-center`}>
          <View style={tw`bg-white p-6 rounded-xl w-72`}>
            <Text style={tw`text-base font-medium mb-3`}>
              Remove {selectedItem?.name}?
            </Text>
            <TouchableOpacity
              style={tw`bg-[${colors.primary}] py-2 rounded-lg mb-2`}
              onPress={handleRemove}
            >
              <Text style={tw`text-white text-center`}>Remove</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={tw`bg-gray-200 py-2 rounded-lg`}
              onPress={() => setShowRemove(false)}
            >
              <Text style={tw`text-center text-gray-700`}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default CartScreen;
