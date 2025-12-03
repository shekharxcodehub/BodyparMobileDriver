import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Svg, { Path } from 'react-native-svg';
import tw from 'twrnc';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { colors } from '../theme/colors';

const countries = [
  { label: '🇿🇦 +27', value: '+27' },
  { label: '🇺🇸 +1', value: '+1' },
  { label: '🇮🇳 +91', value: '+91' },
  // Add more countries as needed
];

// Yup validation schema
const validationSchema = Yup.object().shape({
  countryCode: Yup.string().required('Country code is required'),
  phone: Yup.string()
    .required('Phone number is required')
    .matches(/^\d+$/, 'Phone number must contain only digits')
    .min(10, 'Phone number must be at least 10 digits')
    .max(12, 'Phone number must be at least 12 digits'),
});

export default function PhoneLoginScreen({ navigation }) {
  return (
    <Formik
      initialValues={{ countryCode: '+27', phone: '' }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        // For static design, navigate to OTP screen
        navigation.navigate('Auth', { screen: 'OtpVerification' });
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched, setFieldValue }) => (
        <View style={tw`flex-1 bg-white`}>
          {/* Curved Header */}
          <View style={{ position: 'relative', height: 250 }}>
            <View style={[tw`absolute w-full bg-[${colors.primary}]`, { height: 250 }]} />
            <Svg
              height="200"
              width="100%"
              viewBox="0 0 400 200"
              style={{ position: 'absolute', top: 0 }}
            >
              <Path d="M0 0 H400 V140 Q200 200 0 140 Z" fill="#f87171" />
            </Svg>
            <View style={tw`absolute w-full h-full justify-center items-center pb-15`}>
              <Text style={tw`text-white text-2xl font-bold`}>Welcome Back</Text>
            </View>
          </View>

          {/* White content area */}
          <View
            style={[
              tw`flex-1 bg-white px-6 pt-20 justify-between`,
              { marginTop: -75, borderTopLeftRadius: 90, borderTopRightRadius: 0 },
            ]}
          >
            <View>
              <Text style={tw`text-gray-500 mb-6 text-base text-center`}>Please enter your information</Text>
              <View style={tw`flex-row border border-gray-300 rounded-lg overflow-hidden mb-2`}>
                <View style={tw`w-28 bg-gray-100 justify-center items-center flex-row px-3`}>
                  <RNPickerSelect
                    onValueChange={(value) => setFieldValue('countryCode', value)}
                    items={countries}
                    value={values.countryCode}
                    style={{
                      inputIOS: tw`text-base`,
                      inputAndroid: tw`text-base`,
                      iconContainer: {
                        position: 'absolute',
                        right: -15,
                        top: '50%',
                        transform: [{ translateY: -10 }],
                      },
                    }}
                    useNativeAndroidPickerStyle={false}
                    Icon={() => <Text style={tw`text-gray-500`}>▼</Text>}
                  />
                </View>
                <TextInput
                  style={tw`flex-1 p-3 text-base`}
                  placeholder="Phone Number"
                  keyboardType="phone-pad"
                  value={values.phone}
                  maxLength={10}
                  onChangeText={handleChange('phone')}
                />
              </View>

              {/* Error messages */}
              {touched.countryCode && errors.countryCode ? (
                <Text style={tw`text-[${colors.primary}] text-sm`}>{errors.countryCode}</Text>
              ) : null}
              {touched.phone && errors.phone ? (
                <Text style={tw`text-[${colors.primary}] text-sm`}>{errors.phone}</Text>
              ) : null}

              <TouchableOpacity
                style={tw`bg-[${colors.primary}] py-3 rounded-lg mb-4 mt-4`}
                onPress={handleSubmit}
              >
                <Text style={tw`text-white text-center font-semibold`}>Send OTP</Text>
              </TouchableOpacity>

              {/* <TouchableOpacity onPress={() => navigation.navigate('Auth', { screen: 'Login' })}>
                <Text style={tw`text-center text-sm underline font-bold text-gray-900`}>
                  Login with Email instead
                </Text>
              </TouchableOpacity> */}

              {/* Divider */}
              <View style={tw`flex-row items-center my-6`}>
                <View style={tw`flex-1 h-px bg-gray-300`} />
                <Text style={tw`mx-2 text-gray-500 text-sm`}>or login with</Text>
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

            {/* Bottom Register Link */}
            {/* <View style={tw`pb-12`}>
              <Text style={tw`text-center text-sm text-gray-600`}>
                don't have an account?{' '}
                <Text
                  style={tw`text-black font-bold`}
                  onPress={() => navigation.navigate('Auth', { screen: 'SignUp' })}
                >
                  Register
                </Text>
              </Text>
            </View> */}
          </View>
        </View>
      )}
    </Formik>
  );
}