import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
import Svg, { Path } from 'react-native-svg';
import tw from 'twrnc';
import { colors } from '../theme/colors';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={tw`flex-1 bg-white`}>
      {/* Curved Header */}
      <View style={{ position: 'relative', height: 250 }}>
        {/* Background color */}
        <View style={[tw`absolute w-full bg-[${colors.primary}]`, { height: 250 }]} />

        {/* Curved SVG overlay */}
        <Svg
          height="200"
          width="100%"
          viewBox="0 0 400 200"
          style={{ position: 'absolute', top: 0 }}
        >
          <Path
            d="M0 0 H400 V140 Q200 200 0 140 Z"
            fill="#f87171"
          />
        </Svg>

        {/* Header text */}
        <View style={tw`absolute w-full h-full justify-center items-center pb-15`}>
          <Text style={tw`text-white text-2xl font-bold`}>Create your Account</Text>
        </View>
      </View>

      {/* White content area with negative margin to overlap */}
      <View
        style={[
          tw`flex-1 bg-white px-6 pt-20 justify-between`,
          { marginTop: -75, borderTopLeftRadius: 90, borderTopRightRadius: 0 }
        ]}
      >
        <View>
          <Text style={tw`text-gray-500 mb-6 text-base text-center`}>
            Enter your information to register with us
          </Text>

          <TextInput placeholder="Enter your Name" value={name} onChangeText={setName} style={tw`border border-gray-300 rounded-lg px-4 py-3 mb-4`} />
          <TextInput placeholder="Phone Number" value={phone} onChangeText={setPhone} style={tw`border border-gray-300 rounded-lg px-4 py-3 mb-4`} />
          <TextInput placeholder="E-mail Address" value={email} onChangeText={setEmail} style={tw`border border-gray-300 rounded-lg px-4 py-3 mb-4`} />
          <TextInput placeholder="Create password" secureTextEntry value={password} onChangeText={setPassword} style={tw`border border-gray-300 rounded-lg px-4 py-3 mb-4`} />

          <TouchableOpacity style={tw`bg-[${colors.primary}] py-3 rounded-lg mb-4`}>
            <Text style={tw`text-white text-center font-semibold`}>Register</Text>
          </TouchableOpacity>

          <View style={tw`flex-row items-center mb-4`}>
            <View style={tw`flex-1 h-px bg-gray-300`} />
            <Text style={tw`mx-2 text-gray-400 text-sm`}>or register with</Text>
            <View style={tw`flex-1 h-px bg-gray-300`} />
          </View>

          {/* Social Login Icons */}
          <View style={tw`flex-row justify-center`}>
            <TouchableOpacity style={tw`mx-3`}>
              <Image
                source={require('../../assets/facebook.png')}
                style={tw`w-12 h-12`}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={tw`mx-3`}>
              <Image
                source={require('../../assets/google.png')}
                style={tw`w-12 h-12`}
                resizeMode="contain"
              />
            </TouchableOpacity>
            <TouchableOpacity style={tw`mx-3`}>
              <Image
                source={require('../../assets/apple.png')}
                style={tw`w-12 h-12`}
                resizeMode="contain"
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* Bottom fixed Register Link */}
        <View style={tw`pb-12`}>
          <Text style={tw`text-center text-sm text-gray-600`}>
            already have an account?{' '}
            <Text
              style={tw`text-black font-bold`}
              onPress={() => navigation.navigate('Auth', { screen: 'Login' })}
            >
              Login
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
