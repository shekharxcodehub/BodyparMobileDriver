import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AuthContext } from '../context/AuthContext';
import { Ionicons, MaterialIcons, Feather } from '@expo/vector-icons';

// Auth Screens
import LoginScreen from '../screens/LoginScreen';
import SignUpScreen from '../screens/SignUpScreen';
import PhoneLoginScreen from '../screens/PhoneLoginScreen';
import OtpVerificationScreen from '../screens/OtpVerificationScreen';

// Main App Screens
import HomeScreen from '../screens/HomeScreen';
import WishlistScreen from '../screens/WishlistScreen';
import GetHelpScreen from '../screens/GetHelpScreen';
import OrdersScreen from '../screens/OrdersScreen';
import AccountSettingsScreen from '../screens/AccountSettingsScreen';

// Other Screens
import FAQScreen from '../screens/FAQScreen';
import PolicyScreen from '../screens/PolicyScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ProductListingScreen from '../screens/ProductListingScreen';
import ProductDetailsScreen from '../screens/ProductDetailsScreen';
import SearchScreen from '../screens/SearchScreen';
import ChatScreen from '../screens/ChatScreen';
import ReviewScreen from '../screens/ReviewScreen';
import ReviewSubmittedScreen from '../screens/ReviewSubmittedScreen';
import CartScreen from '../screens/CartScreen';
import SavedAddressesScreen from '../screens/SavedAddressesScreen';
import AddAddressScreen from '../screens/AddAddressScreen';
import EditProfileScreen from '../screens/EditProfileScreen';
import OrderReceivedScreen from '../screens/OrderReceivedScreen';
import OrderTrackingScreen from '../screens/OrderTrackingScreen';

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
          paddingBottom: 0,
          height: 65,
        },
        tabBarLabelStyle: {
          fontSize: 14,
          marginBottom: 0,
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

function MainAppStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="MainTabs" component={MainTabs} />

      {/* Modal Screens */}
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="FAQScreen" component={FAQScreen} />
        <Stack.Screen name="PolicyScreen" component={PolicyScreen} />
        <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      </Stack.Group>

      {/* Regular Screens */}
      <Stack.Screen name="ProductListingScreen" component={ProductListingScreen} />
      <Stack.Screen name="ProductDetailsScreen" component={ProductDetailsScreen} />
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
      <Stack.Screen name="ReviewSubmittedScreen" component={ReviewSubmittedScreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="SavedAddressesScreen" component={SavedAddressesScreen} />
      <Stack.Screen name="AddAddressScreen" component={AddAddressScreen} />
      <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
      <Stack.Screen name="OrderReceivedScreen" component={OrderReceivedScreen} />
      <Stack.Screen name="OrderTrackingScreen" component={OrderTrackingScreen} />
    </Stack.Navigator>
  );
}

export default function RootNavigator() {
  const { userToken } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userToken ? (
        <Stack.Screen name="MainApp" component={MainAppStack} />
      ) : (
        <Stack.Screen name="Auth" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
