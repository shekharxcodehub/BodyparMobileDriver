import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { AuthProvider, AuthContext } from './src/context/AuthContext';
import RootNavigator from './src/navigation';
import OnboardingScreen from './src/screens/OnboardingScreen';

const Stack = createNativeStackNavigator();

function MainApp() {
  const { isLoading } = React.useContext(AuthContext);
  const [hasSeenOnboarding, setHasSeenOnboarding] = useState(false);
  const [appIsLoading, setAppIsLoading] = useState(true);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const seen = await AsyncStorage.getItem('hasSeenOnboarding');
        setHasSeenOnboarding(seen === 'true');
      } catch (err) {
        console.error('Error loading onboarding state:', err);
      } finally {
        setAppIsLoading(false);
      }
    };

    checkOnboarding();
  }, []);

  const completeOnboarding = async () => {
    try {
      await AsyncStorage.setItem('hasSeenOnboarding', 'true');
      setHasSeenOnboarding(true);
    } catch (err) {
      console.error('Error saving onboarding state:', err);
    }
  };

  if (isLoading || appIsLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!hasSeenOnboarding ? (
              <Stack.Screen name="Onboarding">
                {() => <OnboardingScreen onComplete={completeOnboarding} />}
              </Stack.Screen>
            ) : (
              <Stack.Screen name="Root" component={RootNavigator} />
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <MainApp />
    </AuthProvider>
  );
}
