import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import MapView, { Marker } from "react-native-maps";
import tw from "twrnc";
import Header from "../components/Header";
import { colors } from "../theme/colors";

export default function AddAddressScreen({ navigation }) {
  const [addressType, setAddressType] = useState("Home");
  const [region, setRegion] = useState({
    latitude: -26.2041, // Default: Johannesburg
    longitude: 28.0473,
    latitudeDelta: 0.01,
    longitudeDelta: 0.01,
  });

  const [marker, setMarker] = useState({
    latitude: -26.2041,
    longitude: 28.0473,
  });

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Add Address"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      <ScrollView style={tw`flex-1 bg-white`} showsVerticalScrollIndicator={false}>
        {/* Google Map */}
        <View style={tw`w-full h-48`}>
          <MapView
            style={{ width: Dimensions.get("window").width, height: 200 }}
            region={region}
            onRegionChangeComplete={(reg) => setRegion(reg)}
          >
            <Marker
              coordinate={marker}
              draggable
              onDragEnd={(e) => setMarker(e.nativeEvent.coordinate)}
            />
          </MapView>
        </View>

        {/* Location details */}
        <View style={tw`p-4`}>
          <View style={tw`flex-row items-center justify-between mt-2`}>
            <Text style={tw`text-gray-600 flex-1`}>
              Lat: {marker.latitude.toFixed(4)}, Lng: {marker.longitude.toFixed(4)}
            </Text>
            <TouchableOpacity onPress={() => alert("Change Location clicked")}>
              <Text style={tw`text-[${colors.primary}] font-semibold`}>CHANGE LOCATION</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Contact Details */}
        <View style={tw`border-t border-gray-200 px-4 pt-4`}>
          <Text style={tw`text-base font-semibold mb-4`}>Contact Details</Text>

          <Text style={tw`text-sm text-gray-600 mb-1`}>Deliver to<Text style={tw`text-[${colors.primary}]`}>*</Text></Text>
          <TextInput
            placeholder="Full Name"
            style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
          />

          <Text style={tw`text-sm text-gray-600 mb-1`}>Mobile Number<Text style={tw`text-[${colors.primary}]`}>*</Text></Text>
          <TextInput
            placeholder="Enter mobile number"
            keyboardType="phone-pad"
            style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
          />
        </View>

        {/* Border */}
        <View style={tw`border-b-2 border-gray-200 my-4`} />

        {/* Address Details */}
        <View style={tw`px-4 pt-2`}>
          <Text style={tw`text-base font-semibold mb-2`}>Address Details</Text>

          <Text style={tw`text-sm text-gray-600 mb-1`}>House Number<Text style={tw`text-[${colors.primary}]`}>*</Text></Text>
          <TextInput
            placeholder="Flat / House No."
            style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
          />

          <Text style={tw`text-sm text-gray-600 mb-1`}>Landmark</Text>
          <TextInput
            placeholder="Nearby landmark (optional)"
            style={tw`border border-gray-300 rounded-lg p-3 mb-3`}
          />
        </View>

        {/* Address Type */}
        <View style={tw`px-4 pt-4`}>
          <Text style={tw`text-base font-semibold mb-3`}>Address Type</Text>
          <View style={tw`flex-row`}>
            {["Home", "Work", "Others"].map((type) => (
              <TouchableOpacity
                key={type}
                onPress={() => setAddressType(type)}
                style={tw`px-6 py-2 rounded-full border ${addressType === type
                  ? "bg-red-50 border-red-300"
                  : "bg-white border-gray-300"
                  } mr-3`}
              >
                <Text
                  style={tw`${addressType === type ? "text-[${colors.primary}]" : "text-gray-600"
                    }`}
                >
                  {type}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Save Button */}
        <View style={tw`px-4 mt-6 mb-8`}>
          <TouchableOpacity
            style={tw`bg-[${colors.primary}] py-3 rounded-lg`}
            onPress={() =>
              alert(
                `Address Saved at Lat:${marker.latitude}, Lng:${marker.longitude}`
              )
            }
          >
            <Text style={tw`text-center text-white font-semibold text-base`}>
              Save Address
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
