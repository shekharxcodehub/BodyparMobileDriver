import React from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import tw from "twrnc";
import { useNavigation } from "@react-navigation/native";
import { MaterialIcons } from "@expo/vector-icons";
import Header from "../components/Header";
import { colors } from "../theme/colors";

const addresses = [
  {
    id: "1",
    name: "Thabo Mokoena",
    type: "Home",
    address: "54 Lland Crescent, Newlands, Cape Town, Western Cape, 7700",
    phone: "+27 82 456 7890",
  },
  {
    id: "2",
    name: "Jasmine Kennedy",
    type: "Home",
    address: "04 Lland Crescent, Newlands, Cape Town, Western Cape, 7700",
    phone: "+27 32 890 7890",
  },
];

export default function SavedAddressesScreen() {
  const navigation = useNavigation();

  const renderItem = ({ item }) => (
    <View style={tw`bg-white p-4 border border-gray-300 rounded-xl mb-3`}>
      <View style={tw`flex-row justify-between items-center`}>
        <Text style={tw`px-2 py-1 text-xs text-[${colors.primary}] bg-[${colors.primary}] bg-opacity-10 rounded-sm`}>
          {item.type}
        </Text>
        <TouchableOpacity>
          <MaterialIcons name="delete-outline" size={20} color="black" />
        </TouchableOpacity>
      </View>
      <Text style={tw`font-semibold text-gray-900 my-2`}>{item.name}</Text>
      <Text style={tw`text-gray-600 text-sm`}>{item.address}</Text>
      <View style={tw`flex-row items-center justify-between mt-2`}>
        <Text style={tw`text-gray-600 text-sm`}>{item.phone}</Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("AddAddressScreen", { address: item })}
        >
          <Text style={tw`text-[${colors.primary}] text-sm`}>Edit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Saved addresses"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      <View style={tw`flex-1 p-4`}>
        <FlatList
          data={addresses}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
        />

        <TouchableOpacity
          style={tw`bg-[${colors.primary}] py-3 bottom-3 rounded-xl mt-4`}
          onPress={() => navigation.navigate("AddAddressScreen")}
        >
          <Text style={tw`text-white text-center text-base font-semibold`}>
            Add new address
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
