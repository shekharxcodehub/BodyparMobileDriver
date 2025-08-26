import AsyncStorage from '@react-native-async-storage/async-storage';

const TOKEN_KEY = 'userToken';

export default {
  saveToken: async (token) => {
    try {
      await AsyncStorage.setItem(TOKEN_KEY, token);
    } catch (e) {
      console.log('saveToken error', e);
    }
  },

  getToken: async () => {
    try {
      const t = await AsyncStorage.getItem(TOKEN_KEY);
      return t;
    } catch (e) {
      console.log('getToken error', e);
      return null;
    }
  },

  removeToken: async () => {
    try {
      await AsyncStorage.removeItem(TOKEN_KEY);
    } catch (e) {
      console.log('removeToken error', e);
    }
  },
};
