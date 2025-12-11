import { View, TouchableOpacity, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import tw from "twrnc";

export default function BottomNavBar({ navigation, active }) {
  const tabs = [
    { name: "Home", icon: "home-outline", screen: "Home" },
    { name: "History", icon: "time-outline", screen: "History" },
    { name: "Orders", icon: "receipt-outline", screen: "Orders" },
    { name: "Earning", icon: "cash-outline", screen: "Earning" },
    { name: "Account", icon: "person-outline", screen: "Account" },
  ];

  return (
    <View style={tw`bg-white flex-row justify-between px-5 py-3 border-t`}>
      {tabs.map((tab, i) => (
        <TouchableOpacity
          key={i}
          onPress={() => navigation.navigate(tab.screen)}
          style={tw`items-center`}
        >
          <Ionicons
            name={tab.icon}
            size={22}
            color={active === tab.name ? "#ff4757" : "#555"}
          />
          <Text
            style={tw`${active === tab.name ? "text-red-400" : "text-gray-500"} text-xs mt-1`}
          >
            {tab.name}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
