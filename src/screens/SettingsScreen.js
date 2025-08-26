import React, { useRef, useState } from "react";
import { View, Text, Switch, TouchableOpacity } from "react-native";
import CustomBottomSheet from "../components/CustomBottomSheet";
import Header from "../components/Header";
import tw from "twrnc";
import { FontAwesome, AntDesign } from "@expo/vector-icons";

export default function SettingsScreen({ navigation }) {
  const bottomSheetRef = useRef(null);
  const [step, setStep] = useState(1);
  const [whatsappNotif, setWhatsappNotif] = useState(false);

  const openDeleteSheet = () => {
    setStep(1);
    bottomSheetRef.current?.snapToIndex(1);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Settings"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      <View style={tw`flex-1 p-5 bg-white`}>
        {/* WhatsApp Notification Row */}
        <View style={tw`flex-row justify-between items-center mb-5`}>
          <View style={tw`flex-row items-center`}>
            <FontAwesome name="whatsapp" size={22} color="#25D366" style={tw`mr-3`} />
            <Text style={tw`text-base text-gray-800`}>
              Receive notifications on WhatsApp
            </Text>
          </View>
          <Switch value={whatsappNotif} onValueChange={setWhatsappNotif} />
        </View>

        {/* Delete Account Row */}
        <TouchableOpacity
          style={tw`flex-row items-center py-4 border-t border-gray-200`}
          onPress={openDeleteSheet}
        >
          <AntDesign name="delete" size={20} color="red" style={tw`mr-3`} />
          <Text style={tw`text-red-600 font-bold`}>Delete Account</Text>
        </TouchableOpacity>

        {/* Bottom Sheet */}
        <CustomBottomSheet
          ref={bottomSheetRef}
          step={step}
          onContinue={() => setStep(2)}
          onDelete={() => {
            console.log("API Call: Delete Account");
            bottomSheetRef.current?.close();
          }}
          onClose={() => bottomSheetRef.current?.close()}
        />
      </View>
    </View>
  );
}
