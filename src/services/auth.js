// This is a mocked auth service to demo login/signup flows.

const MOCK_USER = {
  email: 'test@example.com',
  password: 'password',
  name: 'Demo User'
};

export default {
  sendOtp: async (phone) => {
    // simulate backend
    await new Promise((r) => setTimeout(r, 800));

    if (phone.length >= 10) {
      return { success: true, message: "OTP sent successfully" };
    }
    throw new Error("Invalid phone number");
  },

  verifyOtp: async (phone, otp) => {
    await new Promise((r) => setTimeout(r, 800));

    // replace this logic when your backend is ready
    if (otp === "1234") {
      return { token: "fake-jwt-phone-token-999" };
    }

    throw new Error("Invalid OTP");
  },

  login: async (email, password) => {
    // Simulate network delay
    await new Promise((r) => setTimeout(r, 800));

    if (email === MOCK_USER.email && password === MOCK_USER.password) {
      // return token and user info
      return { token: 'fake-jwt-token-123', user: { name: MOCK_USER.name, email } };
    }
    throw new Error('Invalid email or password');
  },

  signup: async (name, email, password) => {
    // Simulate network delay & created user
    await new Promise((r) => setTimeout(r, 1000));
    // In a real API you'd send name/email/password and get a token back
    return { token: 'fake-jwt-token-123', user: { name, email } };
  },
};
