import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ChevronDown, ChevronUp } from "lucide-react-native"; // or use react-native-vector-icons
import tw from "twrnc";
import Header from "../components/Header";

const faqs = [
  {
    q: "Is there a refund policy?",
    a: "Yes, refunds are available under certain conditions.",
  },
  {
    q: "How do I cancel or modify a booking?",
    a: "You can cancel or modify a booking from the My Bookings section.",
  },
  {
    q: "What types of rooms are available?",
    a: "We offer standard, deluxe, and suite rooms.",
  },
  {
    q: "Do I need to create an account to book a room?",
    a: "Yes, creating an account helps you manage bookings, receive notifications, and access exclusive offers.",
  },
];

export default function FAQScreen({ navigation }) {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={"Frequently Asked Questions"}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      <ScrollView style={tw`flex-1 bg-white p-4`}>
        {faqs.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <View
              key={index}
              style={tw`mb-3 border border-gray-200 rounded-lg overflow-hidden`}
            >
              <TouchableOpacity
                style={tw`flex-row justify-between items-center px-4 py-3 ${isActive ? "bg-red-50" : "bg-white"
                  }`}
                onPress={() => toggle(index)}
              >
                <Text
                  style={tw`flex-1 ${isActive ? "text-red-500 font-semibold" : "text-black"
                    }`}
                >
                  {item.q}
                </Text>
                {isActive ? (
                  <ChevronUp size={20} color={isActive ? "red" : "black"} />
                ) : (
                  <ChevronDown size={20} color="black" />
                )}
              </TouchableOpacity>

              {isActive && (
                <View style={tw`px-4 py-3 bg-white border-t border-gray-200`}>
                  <Text style={tw`text-gray-600`}>{item.a}</Text>
                </View>
              )}
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
}
