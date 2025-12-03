import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { ArrowLeft } from "lucide-react-native";
import tw from "twrnc";

export default function VehicleDetailsScreen({ navigation }) {
  const [vehicleType, setVehicleType] = useState("Bike");
  const [color, setColor] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [model, setModel] = useState("");

  return (
    <View style={tw`flex-1 bg-white`}>

      {/* Header */}
      <TouchableOpacity style={tw`p-4`} onPress={() => navigation.goBack()}>
        <ArrowLeft size={22} color="black" />
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`px-5 pb-20`}
      >
        {/* Title */}
        <Text style={tw`text-xl font-bold text-black mb-1`}>
          Enter vehicle details
        </Text>
        <Text style={tw`text-gray-500 mb-8`}>
          Share your vehicle details and upload required{"\n"}documents
        </Text>

        {/* Row: Vehicle Type & Colour */}
        <View style={tw`flex-row justify-between mb-5`}>
          {/* Vehicle Type */}
          <View style={tw`w-[48%]`}>
            <Text style={tw`text-gray-700 mb-2`}>Vehicle type</Text>
            <TouchableOpacity
              style={tw`border border-gray-300 rounded-lg px-3 py-3 flex-row justify-between items-center`}
            >
              <Text>{vehicleType}</Text>
              <Text style={tw`text-xl`}>⌄</Text>
            </TouchableOpacity>
          </View>

          {/* Colour */}
          <View style={tw`w-[48%]`}>
            <Text style={tw`text-gray-700 mb-2`}>Colour</Text>
            <TextInput
              value={color}
              onChangeText={setColor}
              placeholder="Enter color"
              style={tw`border border-gray-300 rounded-lg px-3 py-3`}
            />
          </View>
        </View>

        {/* Registration Number */}
        <View style={tw`mb-5`}>
          <Text style={tw`text-gray-700 mb-2`}>Registration Number</Text>
          <TextInput
            value={regNumber}
            onChangeText={setRegNumber}
            placeholder="Enter registration number"
            style={tw`border border-gray-300 rounded-lg px-3 py-3`}
          />
        </View>

        {/* Model */}
        <View style={tw`mb-5`}>
          <Text style={tw`text-gray-700 mb-2`}>Model</Text>
          <TextInput
            value={model}
            onChangeText={setModel}
            placeholder="Enter vehicle model"
            style={tw`border border-gray-300 rounded-lg px-3 py-3`}
          />
        </View>

        {/* Next Button */}
        <TouchableOpacity
          style={tw`bg-red-400 py-3 rounded-lg mt-6`}
          onPress={() => navigation.navigate("UploadVehicleDocuments")}
        >
          <Text style={tw`text-white text-center text-base font-medium`}>
            Next
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
