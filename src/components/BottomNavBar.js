import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import { useNavigation, useRoute } from '@react-navigation/native';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

export default function BottomNavBar() {
  const navigation = useNavigation();
  const route = useRoute();

  const tabs = [
    { name: 'Home', route: "HomeScreen", icon: <Ionicons name="home-outline" size={24} />, activeIcon: <Ionicons name="home" size={24} color="#FF6B6B" /> },
    { name: 'Wishlist', route: "WishlistScreen", icon: <MaterialIcons name="favorite-border" size={24} />, activeIcon: <MaterialIcons name="favorite" size={24} color="#FF6B6B" /> },
    { name: 'GetHelp', route: "GetHelpScreen", icon: <Feather name="users" size={24} />, activeIcon: <Feather name="users" size={24} color="#FF6B6B" /> },
    { name: 'Orders', route: "OrdersScreen", icon: <Feather name="package" size={24} />, activeIcon: <Feather name="package" size={24} color="#FF6B6B" /> },
    { name: 'Account', route: "AccountSettingsScreen", icon: <Ionicons name="person-outline" size={24} />, activeIcon: <Ionicons name="person" size={24} color="#FF6B6B" /> },
  ];

  return (
    <View style={tw`flex-row justify-around bg-white py-3 border-t border-gray-200`}>
      {tabs.map((tab, index) => {
        const isActive = route.name === tab.name;
        return (
          <TouchableOpacity
            key={index}
            style={tw`items-center`}
            onPress={() => navigation.navigate(tab.route)}
          >
            {isActive ? tab.activeIcon : tab.icon}
            <Text style={[tw`text-sm mt-1`, isActive && { color: '#FF6B6B' }]}>
              {tab.name === 'GetHelp' ? 'Get help' : tab.name}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
