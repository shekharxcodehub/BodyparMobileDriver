import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import tw from 'twrnc';
import auth from '../services/auth';

export default function LoginScreen({ navigation }) {
  const { signIn } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please enter both email and password');
      return;
    }
    try {
      setLoading(true);
      // Call the auth service
      const res = await auth.login(email, password);
      // Save the token using AuthContext
      await signIn(res.token);
      // Navigation is handled by the RootNavigator based on auth state
    } catch (err) {
      console.error('Login error:', err);
      Alert.alert('Login Failed', err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={tw`flex-1 bg-gray-50`}>
      {/* Curved Header */}
      <View style={{ position: 'relative', height: 250 }}>
        <View style={[tw`absolute w-full bg-red-400`, { height: 250 }]} />
        <Svg height="200" width="100%" viewBox="0 0 400 200" style={{ position: 'absolute', top: 0 }}>
          <Path d="M0 0 H400 V140 Q200 200 0 140 Z" fill="#f87171" />
        </Svg>
        <View style={tw`absolute w-full h-full justify-center items-center pb-15`}>
          <Text style={tw`text-white text-2xl font-bold`}>Welcome Back</Text>
        </View>
      </View>

      {/* Content */}
      <View
        style={[
          tw`flex-1 bg-white px-6 pt-20 justify-between`,
          { marginTop: -75, borderTopLeftRadius: 90, borderTopRightRadius: 0 }
        ]}
      >
        <View>
          <Text style={tw`text-gray-500 mb-6 text-base text-center`}>
            Please enter your information
          </Text>

          <TextInput
            placeholder="Email ID"
            value={email}
            onChangeText={setEmail}
            style={tw`border border-gray-300 rounded-lg px-4 py-4 mb-4 text-sm`}
            placeholderTextColor="#9CA3AF"
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
            style={tw`border border-gray-300 rounded-lg px-4 py-4 mb-3 text-sm`}
            placeholderTextColor="#9CA3AF"
          />

          <TouchableOpacity style={tw`mb-6`}>
            <Text style={tw`text-right text-gray-500 text-sm`}>Forgot password?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleLogin}
            style={tw`bg-red-400 py-3 rounded-lg mb-4 flex-row justify-center items-center`}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={tw`text-white font-semibold text-base`}>Login</Text>
            )}
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate("PhoneLoginScreen")}>
            <Text style={tw`text-center text-sm underline font-bold text-gray-900 mb-6`}>
              Login with Phone number instead
            </Text>
          </TouchableOpacity>

          <View style={tw`flex-row items-center mb-6`}>
            <View style={tw`flex-1 h-px bg-gray-200`} />
            <Text style={tw`mx-3 text-gray-400 text-sm`}>or login with</Text>
            <View style={tw`flex-1 h-px bg-gray-200`} />
          </View>

          <View style={tw`flex-row justify-center`}>
            <TouchableOpacity style={tw`mx-3`}>
              <Image source={require('../../assets/facebook.png')} style={tw`w-12 h-12`} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`mx-3`}>
              <Image source={require('../../assets/google.png')} style={tw`w-12 h-12`} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={tw`mx-3`}>
              <Image source={require('../../assets/apple.png')} style={tw`w-12 h-12`} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={tw`pb-12`}>
          <Text style={tw`text-center text-sm text-gray-600`}>
            don't have an account?{' '}
            <Text style={tw`text-black font-bold`} onPress={() => navigation.navigate("SignUpScreen")}>
              Register
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
