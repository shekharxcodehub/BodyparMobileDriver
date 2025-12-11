import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import tw from "twrnc";

export default function DocumentStatusScreen({ navigation }) {
  const statusData = [
    {
      title: "Document Verification",
      status: "Pending",
      action: "Verify"
    },
    {
      title: "Vehicle details",
      status: "Verified",
      action: "Verify"
    },
    {
      title: "Upload Documents",
      status: "Pending",
      action: "Upload"
    },
    {
      title: "Setup Profile",
      status: "Pending",
      action: "Edit"
    },
  ];

  return (
    <View style={tw`flex-1 bg-white`}>

      {/* Header Back Button */}
      <TouchableOpacity style={tw`p-4`} onPress={() => navigation.goBack()}>
        <ArrowLeft size={22} color="black" />
      </TouchableOpacity>

      {/* Scrollable Content */}
      <ScrollView
        contentContainerStyle={tw`px-5 pt-2 pb-4`}
        showsVerticalScrollIndicator={false}
        style={tw`flex-1`}
      >
        {/* Title */}
        <Text style={tw`text-xl font-bold text-black mb-1`}>
          Document Verification
        </Text>
        <Text style={tw`text-gray-500 mb-8`}>
          Check the status of your documents
        </Text>

        {/* Status List */}
        {statusData.map((item, index) => (
          <View
            key={index}
            style={tw`border border-red-200 rounded-xl px-4 py-4 mb-4 flex-row justify-between items-center`}
          >
            <Text style={tw`text-black text-base w-1/2`}>{item.title}</Text>

            <TouchableOpacity
              style={tw`bg-red-400 px-4 py-2 rounded-lg`}
              onPress={() => {
                if (item.title === "Document Verification")
                  navigation.navigate("DocumentVerificationScreen");
                if (item.title === "Vehicle details")
                  navigation.navigate("VehicleDetailsScreen");
                if (item.title === "Upload Documents")
                  navigation.navigate("UploadDocumentsScreen");
                if (item.title === "Setup Profile")
                  navigation.navigate("SetupProfileScreen");
              }}
            >
              <Text style={tw`text-white font-semibold`}>{item.action}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      <View style={tw`p-5 bg-white`}>
        <TouchableOpacity
          style={tw`bg-red-400 py-3 rounded-lg`}
          onPress={() => navigation.navigate("MainTabs", { screen: "Home" })}
        >
          <Text style={tw`text-white text-center text-base font-medium`}>
            Go To Home
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
