import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
  Alert,
  TextInput,
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  FontAwesome5,
} from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../components/Header";
import { colors } from "../theme/colors";
const ProfileBanner = require("../../assets/profile_banner.png");
const UserProfile = require("../../assets/user1.jpg");

const EditProfileScreen = ({ navigation }) => {
  const [name, setName] = useState("Thabo Mokoena");
  const [email, setEmail] = useState("greenemma23cv@gmail.com");
  const [phone, setPhone] = useState("+27 962066100");
  const [dob, setDob] = useState("25/05/2001");

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Edit Profile"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      <ScrollView contentContainerStyle={tw`pt-0 pb-28`} showsVerticalScrollIndicator={false}>
        {/* Top Banner */}
        <ImageBackground
          source={ProfileBanner}
          style={tw`w-full h-40 justify-center items-center`}
        >
          {/* Profile Image */}
          <View style={tw`absolute -bottom-12 items-center`}>
            <View style={tw`relative`}>
              <Image
                source={UserProfile}
                style={tw`w-28 h-28 rounded-full border-4 border-white`}
              />
              <TouchableOpacity
                style={tw`absolute bottom-1 right-1 bg-gray-100 p-1 rounded-full`}
              >
                <Ionicons name="camera" size={18} color="black" />
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>

        <View style={tw`p-4`}>
          {/* User Info */}
          <View style={tw`items-center mb-4 pt-16`}>
            <Text style={tw`text-lg font-semibold text-gray-800`}>
              Thabo Mokoena
            </Text>
          </View>

          {/* Full Name */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-600 text-sm mb-1`}>Full Name</Text>
            <TextInput
              value={name}
              onChangeText={setName}
              placeholder="Enter full name"
              style={tw`border border-gray-300 rounded-lg px-3 py-3`}
            />
          </View>

          {/* Email */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-600 text-sm mb-1`}>E-mail</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="Enter email"
              keyboardType="email-address"
              style={tw`border border-gray-300 rounded-lg px-3 py-3`}
            />
          </View>

          {/* Phone */}
          <View style={tw`mb-4`}>
            <Text style={tw`text-gray-600 text-sm mb-1`}>Phone Number</Text>
            <TextInput
              value={phone}
              onChangeText={setPhone}
              placeholder="+27 962066100"
              keyboardType="phone-pad"
              style={tw`border border-gray-300 rounded-lg px-3 py-3`}
            />
          </View>

          {/* Date of Birth */}
          <View style={tw`mb-6`}>
            <Text style={tw`text-gray-600 text-sm mb-1`}>Date of Birth</Text>
            <View style={tw`border border-gray-300 rounded-lg flex-row items-center px-3 py-1`}>
              <MaterialIcons name="calendar-today" size={18} color="gray" />
              <TextInput
                value={dob}
                onChangeText={setDob}
                placeholder="DD/MM/YYYY"
                style={tw`flex-1 ml-2`}
              />
            </View>
          </View>

          {/* Update Button */}
          <TouchableOpacity style={tw`bg-[${colors.primary}] py-3 rounded-lg`}>
            <Text style={tw`text-white text-center text-base font-medium`}>Update</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfileScreen;
