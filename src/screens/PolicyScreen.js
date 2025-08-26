import React, { use } from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";
import Header from "../components/Header";

export default function PolicyScreen({ navigation }) {
  const route = useRoute();
  const { type } = route.params; // "terms" or "privacy"

  const content = {
    terms: {
      title: "Terms and Conditions",
      sections: [
        {
          heading: "Introduction",
          text: "Welcome to [Your App Name]! By using our app, you agree to comply with the following Terms and Conditions. Please read them carefully before making any bookings."
        },
        {
          heading: "User Eligibility",
          text: "• You must be at least 18 years old to create an account and make bookings.\n• You agree to provide accurate and up-to-date information during registration and booking."
        },
        {
          heading: "Booking Policy",
          text: "• All room bookings are subject to availability.\n• Prices displayed include applicable taxes and fees unless stated otherwise.\n• Users must adhere to the check-in and check-out times specified in their booking confirmation."
        },
        {
          heading: "Payment Terms",
          text: "• Payments must be made using the available payment methods in the app.\n• Full or partial payment may be required at the time of booking, depending on the room provider’s policy.\n• We do not store your payment details; all transactions are processed securely through third-party payment gateways."
        },
        {
          heading: "User Conduct",
          text: "• Users must not engage in fraudulent activities, misuse the app, or violate any local laws.\n• Harassment, abuse, or offensive behavior towards other users, property owners, or customer support will not be tolerated.\n• We reserve the right to suspend or terminate accounts that violate these terms."
        },
        {
          heading: "Liability Disclaimer",
          text: "• We act as an intermediary between users and room providers and are not responsible for any issues related to room conditions, amenities, or disputes.\n• We are not liable for any losses, damages, or injuries occurring during your stay."
        },
        {
          heading: "Modification of Terms",
          text: "• We reserve the right to update these Terms and Conditions at any time. Changes will be communicated via the app.\n• Continued use of the app after changes take effect constitutes acceptance of the updated terms."
        },
        {
          heading: "Contact Information",
          text: "If you have any questions regarding these terms, please contact us at:\n📧 Email: [support@yourapp.com]\n📞 Phone: [Your Contact Number]"
        }
      ],
      buttonText: "Accept"
    },
    privacy: {
      title: "Privacy Policy",
      sections: [
        {
          heading: "Introduction",
          text: "Welcome to [Your App Name]! By using our app, you agree to comply with the following Privacy Policy. Please read them carefully before making any bookings."
        },
        {
          heading: "User Eligibility",
          text: "• You must be at least 18 years old to create an account and make bookings.\n• You agree to provide accurate and up-to-date information during registration and booking."
        },
        {
          heading: "Booking Policy",
          text: "• All room bookings are subject to availability.\n• Prices displayed include applicable taxes and fees unless stated otherwise.\n• Users must adhere to the check-in and check-out times specified in their booking confirmation."
        },
        {
          heading: "Payment Terms",
          text: "• Payments must be made using the available payment methods in the app.\n• Full or partial payment may be required at the time of booking, depending on the room provider’s policy.\n• We do not store your payment details; all transactions are processed securely through third-party payment gateways."
        },
        {
          heading: "User Conduct",
          text: "• Users must not engage in fraudulent activities, misuse the app, or violate any local laws.\n• Harassment, abuse, or offensive behavior towards other users, property owners, or customer support will not be tolerated.\n• We reserve the right to suspend or terminate accounts that violate these terms."
        },
        {
          heading: "Liability Disclaimer",
          text: "• We act as an intermediary between users and room providers and are not responsible for any issues related to room conditions, amenities, or disputes.\n• We are not liable for any losses, damages, or injuries occurring during your stay."
        },
        {
          heading: "Modification of Terms",
          text: "• We reserve the right to update this Privacy Policy at any time. Changes will be communicated via the app.\n• Continued use of the app after changes take effect constitutes acceptance of the updated policy."
        },
        {
          heading: "Contact Information",
          text: "If you have any questions regarding this policy, please contact us at:\n📧 Email: [support@yourapp.com]\n📞 Phone: [Your Contact Number]"
        }
      ],
      buttonText: "Accept"
    }
  };

  const page = content[type] || content.terms;

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Header */}
      <Header
        navigation={navigation}
        title={page.title}
        showBack={true}
        showSearch={false}
        showCart={false}
      />

      {/* Content */}
      <ScrollView contentContainerStyle={tw`p-4 pb-20`}>
        {page.sections.map((section, idx) => (
          <View key={idx} style={tw`mb-6`}>
            <Text style={tw`text-base font-semibold mb-1`}>{section.heading}</Text>
            <Text style={tw`text-gray-700 leading-5`}>{section.text}</Text>
          </View>
        ))}
      </ScrollView>

      {/* Footer Button */}
      {/* <View style={tw`absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200`}>
        <TouchableOpacity
          style={tw`bg-red-500 py-3 rounded-lg`}
          onPress={() => {
            // API call or action when accepted
            console.log(`${page.title} accepted`);
            navigation.goBack();
          }}
        >
          <Text style={tw`text-center text-white font-semibold`}>{page.buttonText}</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
}
