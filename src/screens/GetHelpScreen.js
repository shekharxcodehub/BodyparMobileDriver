import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import tw from "twrnc";
import { Ionicons, MaterialIcons, Feather, FontAwesome5 } from "@expo/vector-icons";
import BottomNavBar from "../components/BottomNavBar";
import Header from "../components/Header";

export default function GetHelpScreen({ navigation }) {
  const options = [
    {
      title: "Live Chat",
      subtitle: "Connect with our agent to solve any queries",
      icon: <Ionicons name="chatbubble-ellipses-outline" size={22} color="#FF3B30" />,
      titleStyle: { color: "#FF3B30" },
      onPress: () => navigation.navigate("ChatScreen"),
    },
    {
      title: "Chat on whatsapp",
      subtitle: "Connect with us through Whatsapp",
      icon: <FontAwesome5 name="whatsapp" size={22} color="#25D366" />,
      titleStyle: { color: "#25D366" },
      onPress: () => console.log("WhatsApp"),
    },
    {
      icon: <Ionicons name="help-circle-outline" size={22} color="black" />,
      title: "FAQs",
      subtitle: "Get answers to frequently asked questions",
      onPress: () => navigation.navigate("FAQScreen"),
    },
    {
      title: "Email us",
      subtitle: "Send us a mail",
      icon: <MaterialIcons name="email" size={22} color="#000" />,
      onPress: () => console.log("Email"),
    },
    {
      title: "Call us",
      subtitle: "Connect with us over a phone call",
      icon: <Feather name="phone-call" size={22} color="#000" />,
      onPress: () => console.log("Call"),
    },
    {
      title: "Suggestions and feedbacks",
      subtitle: "We would love to hear back from you",
      icon: <Feather name="star" size={22} color="#000" />,
      onPress: () => navigation.navigate("ReviewScreen"),
    },
  ];

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Help Center"}
        showBack={true}
        showSearch={true}
        showCart={true}
        cartCount={3}
      />

      {/* Body */}
      <ScrollView contentContainerStyle={tw`p-4`} showsVerticalScrollIndicator={false}>
        {options.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={tw`flex-row items-start p-4 mb-3 bg-white rounded-lg border border-gray-200`}
            onPress={item.onPress}
          >
            <View style={tw`mr-3`}>{item.icon}</View>
            <View style={tw`flex-1`}>
              <Text style={[tw`text-base font-semibold`, item.titleStyle]}>{item.title}</Text>
              <Text style={tw`text-gray-500 text-sm mt-0.5`}>{item.subtitle}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
