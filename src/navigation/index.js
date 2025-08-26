import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from '../context/AuthContext';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

// Screens
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import PhoneLoginScreen from '../screens/PhoneLoginScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';
import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/WishlistScreen';
import GetHelpScreen from '../screens/GetHelpScreen';
import OrdersScreen from '../screens/OrdersScreen';
import AccountSettingsScreen from '../screens/AccountSettingsScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let IconComponent = Ionicons; // default

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';

          } else if (route.name === 'Wishlist') {
            iconName = focused ? 'heart' : 'heart-outline';
            IconComponent = Ionicons;

          } else if (route.name === 'GetHelp') {
            iconName = 'users';
            IconComponent = Feather;

          } else if (route.name === 'Orders') {
            iconName = 'package';
            IconComponent = Feather;

          } else if (route.name === 'Account') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <IconComponent name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#FF6B6B',
        tabBarInactiveTintColor: 'black',
        headerShown: false,
        tabBarStyle: {
          paddingTop: 5,
          paddingBottom: 5,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 5,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} options={{ title: 'Wishlist' }} />
      <Tab.Screen name="GetHelp" component={GetHelpScreen} options={{ title: 'Get Help' }} />
      <Tab.Screen name="Orders" component={OrdersScreen} options={{ title: 'Orders' }} />
      <Tab.Screen name="Account" component={AccountSettingsScreen} options={{ title: 'Account' }} />
    </Tab.Navigator>
  );
}

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="PhoneLogin" component={PhoneLoginScreen} />
      <Stack.Screen name="OtpVerification" component={OtpVerificationScreen} />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  const { userToken } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userToken ? (
        <Stack.Screen name="MainTabs" component={MainTabs} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
