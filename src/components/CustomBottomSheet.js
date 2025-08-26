import React, { forwardRef, useMemo } from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import BottomSheet from "@gorhom/bottom-sheet";
import tw from "twrnc";

const CustomBottomSheet = forwardRef(({ step, onClose, onContinue, onDelete }, ref) => {
  const snapPoints = useMemo(() => ["40%", "60%"], []);

  return (
    <BottomSheet ref={ref} snapPoints={snapPoints} enablePanDownToClose onClose={onClose}>
      <View style={tw`flex-1 p-5`}>
        {step === 1 && (
          <>
            <Text style={tw`text-lg font-bold mb-4`}>Delete account</Text>

            <View style={tw`flex-row items-center mb-4`}>
              <Image source={{ uri: "https://i.pravatar.cc/100" }} style={tw`w-10 h-10 rounded-full mr-3`} />
              <Text style={tw`text-base font-medium`}>Jack Bright</Text>
            </View>

            <Text style={tw`text-gray-500 mb-5`}>
              To confirm your identity, please verify with your password.
            </Text>

            <TextInput
              placeholder="Password"
              secureTextEntry
              style={tw`border border-gray-300 rounded-lg p-3 mb-4`}
            />

            <TouchableOpacity style={tw`bg-red-500 p-4 rounded-lg items-center`} onPress={onContinue}>
              <Text style={tw`text-white font-bold`}>Continue</Text>
            </TouchableOpacity>
          </>
        )}

        {step === 2 && (
          <>
            <Text style={tw`text-lg font-bold mb-4`}>Delete account</Text>

            <Text style={tw`text-gray-500 mb-5`}>
              You are about to delete all of the data in your account. Are you sure?
              Account once deleted won’t be recovered again.
            </Text>

            <TouchableOpacity style={tw`bg-red-600 p-4 rounded-lg items-center mb-3`} onPress={onDelete}>
              <Text style={tw`text-white font-bold`}>Delete Account</Text>
            </TouchableOpacity>

            <TouchableOpacity style={tw`border border-gray-300 p-4 rounded-lg items-center`} onPress={onClose}>
              <Text style={tw`text-gray-800 font-medium`}>Cancel</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </BottomSheet>
  );
});

export default CustomBottomSheet;
