import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ArrowLeft } from "lucide-react-native";
import tw from "twrnc";

export default function UploadDocumentsScreen({ navigation }) {
  const statusData = [
    {
      title: "Registration Certificate",
      status: "Pending",
      action: "Upload"
    },
    {
      title: "Insurance Document",
      status: "Verified",
      action: "Upload"
    },
    {
      title: "Pollution Certificate",
      status: "Pending",
      action: "Upload"
    },
  ];

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header Back Button */}
      <TouchableOpacity style={tw`p-4`} onPress={() => navigation.goBack()}>
        <ArrowLeft size={22} color="black" />
      </TouchableOpacity>

      <ScrollView
        contentContainerStyle={tw`px-5 pt-2 pb-20`}
        showsVerticalScrollIndicator={false}
      >
        {/* Title */}
        <Text style={tw`text-xl font-bold text-black mb-1`}>
          Upload Documents
        </Text>
        <Text style={tw`text-gray-500 mb-8`}>
          Upload following documents in order to set up your profile
        </Text>

        {/* Status List */}
        {statusData.map((item, index) => (
          <View
            key={index}
            style={tw`border border-red-200 rounded-xl px-4 py-4 mb-4 flex-row justify-between items-center`}
          >
            {/* Label */}
            <Text style={tw`text-black text-base w-1/2`}>
              {item.title}
            </Text>

            {/* Right Side: Action Button OR Status */}
            {item.action ? (
              <TouchableOpacity
                style={tw`bg-red-400 px-4 py-2 rounded-lg`}
                onPress={() => {
                  if (item.title === "Registration Certificate") {
                    navigation.navigate("DocumentUploadScreen", {
                      docType: "Registration Certificate",
                    });
                  }
                  if (item.title === "Insurance Document") {
                    navigation.navigate("DocumentUploadScreen", {
                      docType: "Insurance Document",
                    });
                  }
                  if (item.title === "Pollution Certificate") {
                    navigation.navigate("DocumentUploadScreen", {
                      docType: "Pollution Certificate",
                    });
                  }
                }}
              >
                <Text style={tw`text-white font-semibold`}>
                  {item.action}
                </Text>
              </TouchableOpacity>
            ) : (
              <Text
                style={{
                  fontSize: 14,
                  fontWeight: "600",
                  color: item.color || "#d97706",
                }}
              >
                {item.status}
              </Text>
            )}
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
