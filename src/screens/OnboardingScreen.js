import React, { useRef } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Swiper from 'react-native-swiper';
import tw from 'twrnc';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../theme/colors';

const slides = [
  {
    id: 1,
    title: 'Deliver Health. Make a Difference.',
    text: 'Join a trusted network of drivers delivering essential medicines and care to people who need it.',
    button: 'Next',
    type: 'next'
  },
  {
    id: 2,
    title: 'Earn on Your Schedule',
    text: 'Choose your hours and earn steady income — all while making a real impact.',
    button: 'Next',
    type: 'next'
  },
  {
    id: 3,
    title: 'Smart, Simple Delivery App',
    text: 'Track orders, navigate routes, and manage your deliveries — all from your phone.',
    button: 'Sign in',
    type: 'signin'
  }
];

export default function OnboardingScreen({ onComplete }) {
  const swiperRef = useRef(null);
  const navigation = useNavigation();

  const finishOnboarding = async () => {
    await AsyncStorage.setItem('hasSeenOnboarding', 'true');
    onComplete();
  };

  return (
    <Swiper
      ref={swiperRef}
      loop={false}
      dot={<View style={tw`w-5 h-0.5 bg-gray-300 rounded-full mx-1`} />}
      activeDot={<View style={tw`w-5 h-0.5 bg-[${colors.primary}] rounded-full mx-1`} />}
      paginationStyle={{
        bottom: 300, // Move dots up above the text section
      }}
    >
      {slides.map((slide) => (
        <View key={slide.id} style={tw`flex-1 bg-white`}>
          {/* Logo */}
          <View style={tw`items-center mt-28`}>
            <Image
              source={require('../../assets/logo.png')}
              style={tw`w-32 h-16`}
              resizeMode="contain"
            />
          </View>

          {/* Push dots above text by leaving empty space */}
          <View style={tw`flex-1`} />

          {/* Text Content */}
          <View style={tw`px-8 mb-12`}>
            {/* mb-28 leaves space for buttons */}
            <Text style={tw`text-xl font-bold text-center mb-2`}>
              {slide.title}
            </Text>
            <Text style={tw`text-gray-500 text-center text-sm leading-5`}>
              {slide.text}
            </Text>
          </View>

          {/* Buttons */}
          <View style={tw`px-8 mb-12`}>
            <TouchableOpacity
              style={tw`bg-[${colors.primary}] py-3 rounded-lg mb-4`}
              onPress={() => {
                if (slide.type === 'next') {
                  swiperRef.current?.scrollBy(1);
                } else if (slide.type === 'signin') {
                  finishOnboarding();
                }
              }}
            >
              <Text style={tw`text-white text-center font-semibold`}>
                {slide.button}
              </Text>
            </TouchableOpacity>

            {slide.type !== 'signin' ? (
              <TouchableOpacity
                style={tw`border border-gray-300 py-3 rounded-lg`}
                onPress={finishOnboarding}
              >
                <Text style={tw`text-gray-700 text-center`}>Skip</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={tw`border border-gray-300 py-3 rounded-lg`}
                onPress={() => {
                  AsyncStorage.setItem('hasSeenOnboarding', 'true');
                  onComplete();
                }}
              >
                <Text style={tw`text-gray-700 text-center`}>Sign up</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      ))}
    </Swiper>
  );
}
