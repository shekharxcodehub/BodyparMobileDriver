import React, { forwardRef, useImperativeHandle, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, Image } from 'react-native';
import { BottomSheetModal, BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import tw from 'twrnc';
import { colors } from '../../theme/colors';

export const DeleteAccountBottomSheet = forwardRef(({ onDelete, user = {} }, ref) => {
  const bottomSheetRef = useRef(null);
  const [step, setStep] = useState(1);
  const [password, setPassword] = useState('');
  const snapPoints = ['80%'];

  useImperativeHandle(ref, () => ({
    present: () => bottomSheetRef.current?.present(),
    dismiss: () => bottomSheetRef.current?.dismiss(),
  }));

  const renderBackdrop = (props) => (
    <BottomSheetBackdrop
      {...props}
      disappearsOnIndex={-1}
      appearsOnIndex={0}
      pressBehavior="close"
    />
  );

  const handleContinue = () => {
    if (password.trim().length > 0) {
      setStep(2);
    }
  };

  const handleDelete = () => {
    onDelete?.({ password });
    setPassword('');
    setStep(1);
    bottomSheetRef.current?.dismiss();
  };

  const handleClose = () => {
    setPassword('');
    setStep(1);
    bottomSheetRef.current?.dismiss();
  };

  return (
    <BottomSheetModal
      ref={bottomSheetRef}
      index={0}
      snapPoints={snapPoints}
      backdropComponent={renderBackdrop}
      enablePanDownToClose={true}
      backgroundStyle={tw`bg-white rounded-t-3xl`}
      handleIndicatorStyle={tw`bg-gray-300 w-10 self-center mt-2`}
    >
      <View style={tw`flex-1 px-5 pt-2 pb-4`}>
        {/* Header */}
        <View style={tw`flex-row items-center justify-between mb-2`}>
          <Text style={tw`text-lg font-bold text-gray-900`}>Delete account</Text>
          <TouchableOpacity onPress={handleClose}>
            <Text style={tw`text-2xl text-gray-900 px-2 py-1`}>×</Text>
          </TouchableOpacity>
        </View>

        {step === 1 ? (
          <View>
            {/* User Row */}
            <View style={tw`flex-row items-center mt-2 mb-3`}>
              <Image
                source={user?.avatarUrl ? { uri: user.avatarUrl } : require('../../../assets/user1.jpg')}
                style={tw`w-11 h-11 rounded-full bg-gray-200 mr-3`}
                defaultSource={require('../../../assets/user1.jpg')}
              />
              <Text style={tw`text-base font-semibold text-gray-900`}>
                {user?.name || 'Thabo Mokoena'}
              </Text>
            </View>

            {/* Helper copy */}
            <Text style={tw`text-sm text-gray-600 mb-3 leading-5`}>
              To confirm your identity, please verify with your password.
            </Text>

            {/* Password */}
            <TextInput
              value={password}
              onChangeText={setPassword}
              placeholder="Password"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              style={tw`h-11 border border-gray-300 bg-gray-50 rounded px-3 text-gray-900 mb-4`}
            />

            {/* Continue */}
            <TouchableOpacity
              style={tw.style(
                `h-12 rounded-lg items-center justify-center mt-2 bg-[${colors.primary}]`,
                password.trim().length === 0 && `opacity-50`
              )}
              onPress={handleContinue}
              disabled={password.trim().length === 0}
            >
              <Text style={tw`text-white font-semibold text-base`}>Continue</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <View>
            <Text style={tw`text-sm text-gray-600 mt-1 mb-4 leading-5`}>
              You are about to delete all of the data in your account. Are you sure?
              Account once deleted won't be recovered again.
            </Text>

            {/* Delete */}
            <TouchableOpacity
              style={tw`h-12 rounded-lg items-center justify-center mt-2 bg-[${colors.primary}]`}
              onPress={handleDelete}
            >
              <Text style={tw`text-white font-semibold text-base`}>Delete Account</Text>
            </TouchableOpacity>

            {/* Cancel */}
            <TouchableOpacity
              style={tw`h-12 rounded-lg items-center justify-center mt-3 border border-gray-900 bg-white`}
              onPress={handleClose}
            >
              <Text style={tw`text-gray-900 font-semibold text-base`}>Cancel</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </BottomSheetModal>
  );
});
