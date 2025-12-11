import React, { useMemo, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Header from "../components/Header";
import MapView from "react-native-maps";
import BottomSheet from "@gorhom/bottom-sheet";
import tw from "twrnc";

export default function HomeScreen({ navigation }) {
  const [online, setOnline] = useState(false);
  const bottomSheetRef = useRef(null);

  const snapPoints = useMemo(() => ["10%", "45%", "80%"], []);

  const user = {
    name: "Cameron",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    location: "Durban, South Africa",
  };

  return (
    <View style={tw`flex-1 bg-white`}>

      {/* Header */}
      <Header user={user} online={online} setOnline={setOnline} />

      {/* Map */}
      <View style={tw`flex-1`}>
        <MapView
          style={tw`flex-1`}
          initialRegion={{
            latitude: -29.8587,
            longitude: 31.0218,
            latitudeDelta: 0.05,
            longitudeDelta: 0.05,
          }}
        />
      </View>

      {/* Bottom Sheet */}
      <BottomSheet
        ref={bottomSheetRef}
        index={0}
        snapPoints={snapPoints}
        handleIndicatorStyle={{
          backgroundColor: "#ccc",
          width: 60,
          height: 5,
          borderRadius: 10,
        }}
        backgroundStyle={{ borderTopLeftRadius: 25, borderTopRightRadius: 25 }}
      >
        <View style={tw`px-5 pt-3 pb-10`}>

          <Text style={tw`text-center text-lg font-semibold mb-3`}>
            Today’s earning
          </Text>

          <Text style={tw`text-center text-3xl font-bold text-green-600`}>
            R0 <Text style={tw`text-red-500 text-sm`}>-10% than yesterday</Text>
          </Text>

          <View style={tw`h-px bg-gray-200 my-4`} />

          <Text style={tw`text-base font-semibold mb-1`}>
            Go online in order to earn more
          </Text>

          <Text style={tw`text-gray-600 text-sm leading-5 mb-5`}>
            Go online now to receive delivery requests and start earning with every trip.
          </Text>

          <TouchableOpacity style={tw`bg-red-400 py-3 rounded-xl`}>
            <Text style={tw`text-center text-white font-bold text-lg`}>
              Go Online
            </Text>
          </TouchableOpacity>

        </View>
      </BottomSheet>
    </View>
  );
}
