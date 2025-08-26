import React, { useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import tw from 'twrnc';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Yup validation schema
const validationSchema = Yup.object().shape({
  otp1: Yup.string()
    .required('Required')
    .matches(/^\d$/, 'Must be a single digit'),
  otp2: Yup.string()
    .required('Required')
    .matches(/^\d$/, 'Must be a single digit'),
  otp3: Yup.string()
    .required('Required')
    .matches(/^\d$/, 'Must be a single digit'),
  otp4: Yup.string()
    .required('Required')
    .matches(/^\d$/, 'Must be a single digit'),
});

export default function OtpVerificationScreen({ navigation }) {
  // Create refs for each TextInput
  const inputRefs = useRef([React.createRef(), React.createRef(), React.createRef(), React.createRef()]);

  return (
    <Formik
      initialValues={{ otp1: '', otp2: '', otp3: '', otp4: '' }}
      validationSchema={validationSchema}
      onSubmit={() => {
        // For static design, navigate to Home screen
        navigation.navigate("HomeScreen");
      }}
    >
      {({ handleChange, handleSubmit, values, errors, touched }) => (
        <View style={tw`flex-1 bg-white`}>
          {/* Curved Header */}
          <View style={{ position: 'relative', height: 250 }}>
            <View style={[tw`absolute w-full bg-red-400`, { height: 250 }]} />
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
              <Text style={tw`text-gray-500 mb-6 text-base text-center`}>Please enter OTP</Text>

              <View style={tw`flex-row justify-between mb-2`}>
                {['otp1', 'otp2', 'otp3', 'otp4'].map((field, i) => (
                  <View key={i} style={tw`w-16`}>
                    <TextInput
                      ref={inputRefs.current[i]}
                      style={tw`border border-gray-300 rounded-lg p-3 text-center text-lg`}
                      keyboardType="numeric"
                      maxLength={1}
                      value={values[field]}
                      onChangeText={(text) => {
                        handleChange(field)(text);
                        // Auto-advance to next field if a digit is entered
                        if (text && /^\d$/.test(text) && i < 3) {
                          inputRefs.current[i + 1].current.focus();
                        }
                      }}
                      onKeyPress={({ nativeEvent: { key } }) => {
                        // Move to previous field on backspace if field is empty
                        if (key === 'Backspace' && !values[field] && i > 0) {
                          inputRefs.current[i - 1].current.focus();
                        }
                      }}
                    />
                  </View>
                ))}
              </View>

              {/* General error message for all fields */}
              {(touched.otp1 || touched.otp2 || touched.otp3 || touched.otp4) &&
                (errors.otp1 || errors.otp2 || errors.otp3 || errors.otp4) ? (
                <Text style={tw`text-red-500 text-sm mb-4 text-center`}>
                  Please fill all OTP fields with valid digits
                </Text>
              ) : null}

              <TouchableOpacity
                style={tw`bg-red-400 py-3 rounded-lg mt-4`}
                onPress={handleSubmit}
              >
                <Text style={tw`text-white text-center font-semibold`}>Login</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      )}
    </Formik>
  );
}