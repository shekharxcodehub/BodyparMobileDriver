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
} from "react-native";
import {
  Ionicons,
  MaterialIcons,
  Feather,
  FontAwesome5,
} from "@expo/vector-icons";
import tw from "twrnc";
import BottomNavBar from "../components/BottomNavBar";
import Header from "../components/Header";
import GlobalPopup from "../components/GlobalPopup";
const ProfileBanner = require("../../assets/profile_banner.png");
const UserProfile = require("../../assets/user1.jpg");

const ProfileScreen = ({ navigation }) => {
  const [popupVisible, setPopupVisible] = useState(false);
  const { signOut } = useContext(AuthContext);

  const handleLogout = async () => {
    setPopupVisible(false);
    try {
      await signOut();
    } catch (error) {
      console.error("Logout failed:", error);
      Alert.alert("Error", "Failed to log out. Please try again.");
    }
  };

  const profileOptions = [
    // {
    //   icon: <MaterialIcons name="shopping-bag" size={22} color="black" />,
    //   title: "My orders",
    //   subtitle: "Your order history",
    //   onPress: () => navigation.navigate("Orders"),
    // },
    {
      icon: <FontAwesome5 name="map-marker-alt" size={20} color="black" />,
      title: "Saved address",
      subtitle: "Your saved addresses",
      onPress: () => { },
    },
    // {
    //   icon: <Feather name="headphones" size={22} color="black" />,
    //   title: "Help and support",
    //   subtitle: "Contact us for help",
    //   onPress: () => navigation.navigate("Support"),
    // },
    {
      icon: <Ionicons name="help-circle-outline" size={22} color="black" />,
      title: "FAQs",
      subtitle: "Find answers to common questions",
      onPress: () => navigation.navigate("FAQScreen"),
    },
    {
      icon: <Ionicons name="document-text-outline" size={22} color="black" />,
      title: "Term and Conditions",
      subtitle: "Understand terms of our services",
      onPress: () => navigation.navigate("PolicyScreen", { type: "terms" }),
    },
    {
      icon: <Ionicons name="shield-outline" size={22} color="black" />,
      title: "Privacy Policy",
      subtitle: "Details of privacy and policy",
      onPress: () => navigation.navigate("PolicyScreen", { type: "privacy" }),
    },
    {
      icon: <Ionicons name="settings-outline" size={22} color="black" />,
      title: "Settings",
      subtitle: "Manage your account",
      onPress: () => navigation.navigate("SettingsScreen"),
    },
    {
      icon: <Ionicons name="share-social-outline" size={22} color="black" />,
      title: "Share App",
      subtitle: "Tell your friends about our app",
      onPress: () => { },
    },
  ];

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Account Settings"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      <ScrollView contentContainerStyle={tw`pt-0 pb-28`}>
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

        {/* User Info */}
        <View style={tw`items-center mb-4 pt-16`}>
          <Text style={tw`text-lg font-semibold text-gray-800`}>
            Thabo Mokoena
          </Text>
          <TouchableOpacity
            style={tw`bg-red-400 px-4 py-2 rounded-lg mt-2`}
            onPress={() => { }}
          >
            <Text style={tw`text-white font-medium`}>Edit Profile</Text>
          </TouchableOpacity>
        </View>

        {/* Options List */}
        <View style={tw`px-4`}>
          {profileOptions.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={tw`bg-white p-4 rounded-lg mb-3 flex-row items-center border border-gray-200`}
              onPress={item.onPress}
            >
              <View style={tw`mr-3`}>{item.icon}</View>
              <View style={tw`flex-1`}>
                <Text style={[tw`text-base font-medium`, item.titleStyle ? tw`text-red-500` : tw`text-gray-900`]}>
                  {item.title}
                </Text>
                <Text style={tw`text-xs text-gray-500`}>{item.subtitle}</Text>
              </View>
              <Ionicons name="chevron-forward" size={20} color="gray" />
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout Button */}
        <View style={tw`px-4 mt-2`}>
          <TouchableOpacity
            style={tw`border border-red-400 p-4 rounded-lg flex-row items-center justify-center`}
            onPress={() => setPopupVisible(true)}
          >
            <Ionicons
              name="log-out-outline"
              size={20}
              color="red"
              style={tw`mr-2`}
            />
            <Text style={tw`text-red-500 font-medium`}>Log out</Text>
          </TouchableOpacity>
        </View>

        <GlobalPopup
          visible={popupVisible}
          title="Logout"
          message="Are you sure you want to logout?"
          onCancel={() => setPopupVisible(false)}
          onConfirm={handleLogout}
        />
      </ScrollView>

      {/* Bottom Navigation */}
      {/* <BottomNavBar /> */}
    </View>
  );
};

export default ProfileScreen;
