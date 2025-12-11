import { View, Text, Image, Switch } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import GlobalPopup from "./GlobalPopup";

export default function Header({ user, online, setOnline }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [tempOnline, setTempOnline] = useState(online); // store previous value

  const handleSwitchPress = () => {
    // store current state before toggling
    setTempOnline(online);

    // open confirmation popup
    setPopupVisible(true);
  };

  const handleConfirm = () => {
    // User confirmed → toggle online/offline
    setOnline(!online);
    setPopupVisible(false);
  };

  const handleCancel = () => {
    // User cancelled → revert switch
    setOnline(tempOnline);
    setPopupVisible(false);
  };

  return (
    <View style={tw`bg-red-400 px-4 py-3 rounded-b-2xl flex-row items-center`}>

      {/* Left Profile Image */}
      <Image
        source={{ uri: user?.image }}
        style={tw`w-12 h-12 rounded-full mr-3`}
      />

      {/* Name + Location */}
      <View style={tw`flex-1`}>
        <Text style={tw`text-white text-base font-semibold`}>
          Hello {user?.name}
        </Text>
        <Text style={tw`text-white text-xs opacity-80`}>
          {user?.location}
        </Text>
      </View>

      {/* Online / Offline Switch */}
      <View style={tw`flex-row items-center`}>
        <Text style={tw`text-white mr-2`}>
          {online ? "Online" : "Offline"}
        </Text>

        <Switch
          value={online}
          onValueChange={handleSwitchPress} // Lock action behind popup
          thumbColor="#fff"
          trackColor={{ true: "#66ff99", false: "#ccc" }}
        />
      </View>

      {/* Global Popup */}
      <GlobalPopup
        visible={popupVisible}
        title={online ? "Go Offline?" : "Go Online?"}
        message={`Are you sure you want to switch ${online ? "offline" : "online"}?`}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
      />
    </View>
  );
}
