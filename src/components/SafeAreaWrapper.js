import React from 'react';
import { SafeAreaView, StatusBar, Platform } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colors } from '../theme/colors';

export default function SafeAreaWrapper({ children, style }) {
  const insets = useSafeAreaInsets();

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
        backgroundColor={colors.primary}
        translucent={false}
      />
      <SafeAreaView
        style={[
          {
            flex: 1,
            paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
            paddingBottom: insets.bottom,
            paddingLeft: insets.left,
            paddingRight: insets.right,
          },
          style
        ]}
      >
        {children}
      </SafeAreaView>
    </>
  );
}
