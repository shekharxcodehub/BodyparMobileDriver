import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../../components/Header";

export default function DocumentVerificationScreen({ navigation }) {
  const [step, setStep] = useState(1);
  const [selectedDocument, setSelectedDocument] = useState(null);

  // Step 2 form fields
  const [fullName, setFullName] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [issueDate, setIssueDate] = useState("");
  const [expiryDate, setExpiryDate] = useState("");

  // Step 3 image uploads
  const [frontImage, setFrontImage] = useState(null);
  const [backImage, setBackImage] = useState(null);

  const documentOptions = [
    "International Passport",
    "Driving License",
    "Smart ID Card",
  ];

  const pickImage = async (type) => {
    // TODO: implement expo-image-picker OR your logic
    alert(`Pick image for: ${type}`);
  };

  // Move from STEP 2 → STEP 3
  const handleSubmitDocumentInfo = () => {
    // TODO: API CALL LATER
    setStep(3);
  };

  // Submit final uploads
  const handleUploadFiles = () => {
    // TODO: API CALL LATER
    alert("Document Uploaded Successfully!");
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      <Header
        navigation={navigation}
        title="Face and Name Verification"
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      <ScrollView contentContainerStyle={tw`p-5 pb-24`} showsVerticalScrollIndicator={false}>
        
        {/* ---------------------------------------------------------------
            STEP 1 — CHOOSE DOCUMENT TYPE
        ---------------------------------------------------------------- */}
        {step === 1 && (
          <>
            <Text style={tw`text-lg font-semibold mb-2`}>Select a Document</Text>
            <Text style={tw`text-gray-600 mb-6`}>
              For the safety of our drivers you are required to provide one document for verification.
            </Text>

            {documentOptions.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => {
                  setSelectedDocument(item);
                  setStep(2);
                }}
                style={tw`border border-red-300 rounded-xl px-4 py-4 mb-4 flex-row items-center`}
              >
                <View
                  style={[
                    tw`w-5 h-5 rounded-full border`,
                    selectedDocument === item ? tw`bg-red-400 border-red-400` : tw`border-gray-400`
                  ]}
                />
                <Text style={tw`ml-3 text-base text-black`}>{item}</Text>
              </TouchableOpacity>
            ))}
          </>
        )}

        {/* ---------------------------------------------------------------
            STEP 2 — ENTER DOCUMENT INFO
        ---------------------------------------------------------------- */}
        {step === 2 && (
          <>
            <TouchableOpacity onPress={() => setStep(1)} style={tw`mb-4`}>
              <Ionicons name="arrow-back" size={22} color="black" />
            </TouchableOpacity>

            <Text style={tw`text-lg font-semibold mb-1`}>
              Verify with {selectedDocument}
            </Text>
            <Text style={tw`text-gray-600 mb-6`}>
              Please share the following details
            </Text>

            {/* Full Name */}
            <View style={tw`mb-4`}>
              <Text style={tw`text-gray-600 mb-1`}>Full name (as per documents)</Text>
              <TextInput
                value={fullName}
                onChangeText={setFullName}
                placeholder="Enter full name"
                style={tw`border border-gray-300 rounded-lg px-3 py-3`}
              />
            </View>

            {/* ID number */}
            <View style={tw`mb-4`}>
              <Text style={tw`text-gray-600 mb-1`}>ID Number</Text>
              <TextInput
                value={idNumber}
                onChangeText={setIdNumber}
                placeholder="Enter ID number"
                style={tw`border border-gray-300 rounded-lg px-3 py-3`}
              />
            </View>

            {/* Issue / Expiry date */}
            <View style={tw`flex-row justify-between mb-6`}>
              <View style={tw`w-[48%]`}>
                <Text style={tw`text-gray-600 mb-1`}>Issue Date</Text>
                <View style={tw`border border-gray-300 rounded-lg px-3 py-3 flex-row items-center`}>
                  <MaterialIcons name="calendar-today" size={18} color="gray" />
                  <TextInput
                    value={issueDate}
                    onChangeText={setIssueDate}
                    placeholder="DD/MM/YYYY"
                    style={tw`ml-2 flex-1`}
                  />
                </View>
              </View>

              <View style={tw`w-[48%]`}>
                <Text style={tw`text-gray-600 mb-1`}>Expiry Date</Text>
                <View style={tw`border border-gray-300 rounded-lg px-3 py-3 flex-row items-center`}>
                  <MaterialIcons name="calendar-today" size={18} color="gray" />
                  <TextInput
                    value={expiryDate}
                    onChangeText={setExpiryDate}
                    placeholder="DD/MM/YYYY"
                    style={tw`ml-2 flex-1`}
                  />
                </View>
              </View>
            </View>

            {/* Proceed Button */}
            <TouchableOpacity
              onPress={handleSubmitDocumentInfo}
              style={tw`bg-red-400 rounded-lg py-4`}
            >
              <Text style={tw`text-white text-center font-semibold text-base`}>
                Proceed
              </Text>
            </TouchableOpacity>
          </>
        )}

        {/* ---------------------------------------------------------------
            STEP 3 — UPLOAD IMAGES
        ---------------------------------------------------------------- */}
        {step === 3 && (
          <>
            <TouchableOpacity onPress={() => setStep(2)} style={tw`mb-4`}>
              <Ionicons name="arrow-back" size={22} color="black" />
            </TouchableOpacity>

            <Text style={tw`text-lg font-semibold mb-1`}>
              Upload {selectedDocument}
            </Text>
            <Text style={tw`text-gray-600 mb-6`}>
              Make sure the photo is clear.
            </Text>

            {/* Front View */}
            <Text style={tw`text-gray-600 mb-2`}>Front View</Text>
            <TouchableOpacity
              onPress={() => pickImage("front")}
              style={tw`h-36 bg-gray-200 rounded-xl items-center justify-center mb-6`}
            >
              <Ionicons name="cloud-upload-outline" size={40} color="gray" />
              <Text style={tw`text-gray-600 mt-2`}>Upload Image</Text>
            </TouchableOpacity>

            {/* Back View */}
            <Text style={tw`text-gray-600 mb-2`}>Back View</Text>
            <TouchableOpacity
              onPress={() => pickImage("back")}
              style={tw`h-36 bg-gray-200 rounded-xl items-center justify-center mb-6`}
            >
              <Ionicons name="cloud-upload-outline" size={40} color="gray" />
              <Text style={tw`text-gray-600 mt-2`}>Upload Image</Text>
            </TouchableOpacity>

            {/* Upload Button */}
            <TouchableOpacity
              onPress={handleUploadFiles}
              style={tw`bg-red-400 rounded-lg py-4`}
            >
              <Text style={tw`text-white text-center font-semibold text-base`}>
                Upload
              </Text>
            </TouchableOpacity>
          </>
        )}

      </ScrollView>
    </View>
  );
}
