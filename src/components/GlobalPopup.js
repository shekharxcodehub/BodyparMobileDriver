import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import tw from "twrnc";

const GlobalPopup = ({
  visible,
  title,
  message,
  onCancel,
  onConfirm
}) => {
  return (
    <Modal
      transparent
      animationType="fade"
      visible={visible}
    >
      <View style={tw`flex-1 justify-center items-center bg-black/50`}>
        <View style={tw`bg-white rounded-lg w-80 p-5`}>
          {/* Title */}
          <Text style={tw`text-lg font-bold mb-2`}>{title}</Text>

          {/* Message */}
          <Text style={tw`text-gray-600 mb-6`}>{message}</Text>

          {/* Buttons */}
          <View style={tw`flex-row justify-between`}>
            <TouchableOpacity
              style={tw`border border-red-400 rounded-lg px-12 py-3`}
              onPress={onCancel}
            >
              <Text style={tw`text-red-500 font-semibold`}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={tw`bg-red-400 rounded-lg px-12 py-3`}
              onPress={onConfirm}
            >
              <Text style={tw`text-white font-semibold`}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GlobalPopup;
