import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { ArrowLeft, Upload, Trash2 } from "lucide-react-native";
import tw from "twrnc";
import * as ImagePicker from "expo-image-picker";

export default function DocumentUploadScreen({ navigation, route }) {
  const { docType } = route.params; // "Registration Certificate", "Insurance Document", "Pollution Certificate"

  const fieldMap = {
    "Registration Certificate": ["Front View", "Back View"],
    "Pollution Certificate": ["Front View", "Back View"],
    "Insurance Document": ["Image 1", "Image 2"],
  };

  const fields = fieldMap[docType] || [];

  const [images, setImages] = useState({
    0: null,
    1: null,
  });

  const pickImage = async (index) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImages({ ...images, [index]: result.assets[0].uri });
    }
  };

  const removeImage = (index) => {
    setImages({ ...images, [index]: null });
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <View style={tw`flex-row justify-between items-center px-4 py-4`}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft size={22} />
        </TouchableOpacity>

        {/* Conditionally show Edit/Save only if images already exist */}
        {Object.values(images).some((v) => v !== null) && (
          <Text style={tw`text-green-600 font-bold text-base`}>Save</Text>
        )}
      </View>

      <ScrollView contentContainerStyle={tw`px-5 pb-20`}>
        <Text style={tw`text-xl font-bold text-black mb-1`}>
          Upload {docType}
        </Text>

        <Text style={tw`text-gray-500 mb-6`}>
          Make sure the photo is clear
        </Text>

        {/* Render dynamic fields */}
        {fields.map((label, index) => (
          <View key={index} style={tw`mb-6`}>
            <Text style={tw`text-black font-semibold mb-2`}>{label}</Text>

            {images[index] ? (
              <View>
                <Image
                  source={{ uri: images[index] }}
                  style={tw`w-full h-40 rounded-lg`}
                  resizeMode="cover"
                />

                <TouchableOpacity
                  onPress={() => removeImage(index)}
                  style={tw`absolute top-2 right-2 bg-white rounded-full p-1`}
                >
                  <Trash2 size={20} color="red" />
                </TouchableOpacity>
              </View>
            ) : (
              <TouchableOpacity
                style={tw`h-40 bg-gray-200 rounded-lg justify-center items-center`}
                onPress={() => pickImage(index)}
              >
                <Upload size={30} color="gray" />
                <Text style={tw`mt-2 text-gray-500`}>Upload Image</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}

        {/* Show Upload button only when images are selected */}
        {Object.values(images).some((v) => v !== null) && (
          <TouchableOpacity
            style={tw`bg-red-400 py-3 rounded-lg mt-4`}
            onPress={() => console.log("Uploading...")}
          >
            <Text style={tw`text-center text-white font-semibold text-base`}>
              Upload
            </Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </View>
  );
}
