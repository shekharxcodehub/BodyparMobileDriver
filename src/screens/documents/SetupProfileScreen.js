import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import { ArrowLeft, Upload, Calendar } from "lucide-react-native";
import tw from "twrnc";

export default function SetupProfileScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [address, setAddress] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("Male");
  const [profileImage, setProfileImage] = useState(null);

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <TouchableOpacity style={tw`p-4`} onPress={() => navigation.goBack()}>
        <ArrowLeft size={22} color="black" />
      </TouchableOpacity>

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`px-5 pb-24`}
      >
        {/* Title */}
        <Text style={tw`text-xl font-bold text-black mb-1`}>
          Set up your profile
        </Text>
        <Text style={tw`text-gray-500 mb-6`}>
          Fill your personal information
        </Text>

        {/* Upload Picture */}
        <TouchableOpacity
          style={tw`w-full h-40 bg-gray-200 rounded-xl justify-center items-center mb-6`}
        >
          {profileImage ? (
            <Image
              source={{ uri: profileImage }}
              style={tw`w-full h-full rounded-xl`}
              resizeMode="cover"
            />
          ) : (
            <>
              <Upload size={28} color="black" />
              <Text style={tw`mt-2 text-gray-600`}>Upload your picture</Text>
            </>
          )}
        </TouchableOpacity>

        {/* Full Name */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-2`}>
            Full name (as per documents)
          </Text>
          <TextInput
            value={fullName}
            onChangeText={setFullName}
            placeholder="Enter full name"
            style={tw`border border-gray-300 rounded-lg px-3 py-3`}
          />
        </View>

        {/* Email */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-2`}>Email ID</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Enter email address"
            keyboardType="email-address"
            style={tw`border border-gray-300 rounded-lg px-3 py-3`}
          />
        </View>

        {/* Mobile Number */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-2`}>Mobile Number</Text>
          <View
            style={tw`flex-row border border-gray-300 rounded-lg items-center`}
          >
            {/* Country Code Box */}
            <View style={tw`px-3 py-3 border-r border-gray-300 flex-row items-center`}>
              <Text style={tw`text-base`}>🇿🇦 +27</Text>
            </View>

            {/* Number Input */}
            <TextInput
              value={mobile}
              onChangeText={setMobile}
              placeholder="Enter phone number"
              keyboardType="phone-pad"
              style={tw`flex-1 px-3 py-3`}
            />
          </View>
        </View>

        {/* Address */}
        <View style={tw`mb-4`}>
          <Text style={tw`text-gray-700 mb-2`}>Address</Text>
          <TextInput
            value={address}
            onChangeText={setAddress}
            placeholder="Enter your address"
            style={tw`border border-gray-300 rounded-lg px-3 py-3`}
          />
        </View>

        {/* Date of Birth + Gender */}
        <View style={tw`flex-row justify-between`}>
          {/* DOB */}
          <View style={tw`w-[48%] mb-4`}>
            <Text style={tw`text-gray-700 mb-2`}>Date of Birth</Text>
            <View
              style={tw`border border-gray-300 rounded-lg flex-row items-center px-3 py-3`}
            >
              <Calendar size={18} color="gray" />
              <TextInput
                value={dob}
                onChangeText={setDob}
                placeholder="DD/MM/YYYY"
                style={tw`ml-2 flex-1`}
              />
            </View>
          </View>

          {/* Gender */}
          <View style={tw`w-[48%] mb-4`}>
            <Text style={tw`text-gray-700 mb-2`}>Gender</Text>

            <TouchableOpacity
              style={tw`border border-gray-300 rounded-lg px-3 py-3 flex-row justify-between items-center`}
            >
              <Text>{gender}</Text>
              <Text style={tw`text-xl`}>⌄</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Save Button */}
        <TouchableOpacity
          style={tw`bg-red-400 py-3 rounded-lg mt-4`}
          onPress={() => console.log("Save profile")}
        >
          <Text style={tw`text-white text-center text-base font-medium`}>
            Save
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
