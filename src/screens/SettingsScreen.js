import React, { useRef, useState, useCallback } from "react";
import { View, Text, Switch, TouchableOpacity, Alert } from "react-native";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import Header from "../components/Header";
import tw from "twrnc";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { DeleteAccountBottomSheet } from "../components/bottomSheets/DeleteAccountBottomSheet";
import { colors } from "../theme/colors";

export default function SettingsScreen({ navigation }) {
  const deleteAccountSheetRef = useRef(null);
  const [whatsappNotif, setWhatsappNotif] = useState(false);

  // Log when the ref changes
  React.useEffect(() => {
  }, [deleteAccountSheetRef.current]);

  const handleSheetChanges = useCallback((index) => {
    // If index is -1, the sheet is dismissed
    if (index === -1) {
      console.log('Bottom sheet was dismissed');
    }
  }, []);

  const openDeleteSheet = useCallback(() => {
    // Small delay to ensure ref is set
    setTimeout(() => {
      if (deleteAccountSheetRef.current) {
        deleteAccountSheetRef.current.present();
      } else {
        console.error('Bottom sheet ref is not available');
      }
    }, 100);
  }, []);

  const handleDeleteAccount = useCallback(() => {
    Alert.alert(
      "Account Deletion",
      "Your account has been scheduled for deletion.",
      [
        {
          text: "OK",
          onPress: () => {
            deleteAccountSheetRef.current?.dismiss();
          }
        }
      ]
    );
  }, []);

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
          <Text style={tw`text-[${colors.primary}] font-bold`}>Delete Account</Text>
        </TouchableOpacity>

        {/* Delete Account Bottom Sheet */}
        <DeleteAccountBottomSheet
          ref={deleteAccountSheetRef}
          onDelete={handleDeleteAccount}
        />
      </View>
    </View>
  );
}
