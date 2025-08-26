import React, { createContext, useCallback, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import storage from '../utils/storage';

export const AuthContext = createContext({
  userToken: null,
  isLoading: false,
  signIn: async () => {},
  signOut: () => {},
  signUp: async () => {},
});

export const AuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in on app start
    const bootstrapAsync = async () => {
      try {
        const token = await storage.getToken();
        setUserToken(token);
      } catch (e) {
        console.error('Failed to load token', e);
      } finally {
        setIsLoading(false);
      }
    };

    bootstrapAsync();
  }, []);

  const signIn = useCallback(async (token) => {
    try {
      setIsLoading(true);
      await storage.saveToken(token);
      setUserToken(token);
    } catch (e) {
      console.error('Failed to sign in', e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = useCallback(async () => {
    try {
      setIsLoading(true);
      await storage.removeToken();
      // Reset onboarding state on logout
      await AsyncStorage.setItem('hasSeenOnboarding', 'false');
      setUserToken(null);
    } catch (e) {
      console.error('Failed to sign out', e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUp = useCallback(async (token) => {
    try {
      setIsLoading(true);
      await storage.saveToken(token);
      setUserToken(token);
    } catch (e) {
      console.error('Failed to sign up', e);
      throw e;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userToken,
        isLoading,
        signIn,
        signOut,
        signUp,
        setUserToken,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
