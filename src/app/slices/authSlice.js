import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Simulate an API call for login
export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await fetch('api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        if (response.status === 400) {
          throw new Error(errorResponse.message || 'Invalid credentials');
        }
        throw new Error('Something went wrong');
      }
      const data = await response.json();
      if (data) {
        localStorage.setItem("token", data.token);
      }
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const SignUpUser = createAsyncThunk(
  'auth/signup',
  async ({ router, credentials }, { rejectWithValue }) => {
    try {
      const response = await fetch('api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        if (response.status === 400) {
          throw new Error(errorResponse.message || 'Failed to sign up');
        }
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      const userId = String(data.user.id);
      router.push(`/${userId}/otp-verifaction/`)
      localStorage.setItem("email", data.user.id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const forgotPassword = createAsyncThunk(
  'auth/forgotPassword',
  async (email, { rejectWithValue }) => {
    try {
      const response = await fetch('api/auth/forget-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        if (response.status === 400) {
          throw new Error(errorResponse.message || 'Failed to send reset password email');
        }
        throw new Error('Something went wrong');
      }


      const data = await response.json();
      return data.message;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async ({ userId, newPassword }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/reset-password', {
        method: 'POST',
        body: JSON.stringify({ 'userId': userId, 'newPassword': newPassword }),
      });
      console

      if (!response.ok) {
        const errorResponse = await response.json();
        if (response.status === 400) {
          throw new Error(errorResponse.message || 'Failed to reset password');
        }
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      return data.message;  // Returning the success message
    } catch (error) {
      return rejectWithValue(error.message);  // Returning the error message
    }
  }
);

export const verifyOtp = createAsyncThunk(
  'auth/verify-otp',
  async ({ router, userId, otpEntered }, { rejectWithValue }) => {
    try {
      const response = await fetch('/api/auth/verify-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 'userId': userId, 'otpEntered': otpEntered }),
      })

      if (!response.ok) {
        const errorResponse = await response.json();
        if (response.status === 400) {
          throw new Error(errorResponse.message || 'Failed to reset password');
        }
        throw new Error('Something went wrong');
      }

      const data = await response.json();
      if (data) {
        router.push(`/login`)
      }
      return data.message;  // Returning the success message
    } catch (error) {
      return rejectWithValue(error.message);  // Returning the error message
    }
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    loading: false,
    error: null,
    message: '',
    forgotPasswordSuccess: null,
    data: []
  },
  reducers: {
    logout: (state) => {
      state.user = null;
      state.error = null;
      state.forgotPasswordSuccess = null;
      state.message = '';
    },
  },
  extraReducers: (builder) => {
    builder
      // Login actions
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = action.payload.message;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Login failed';
      })

      // Sign up actions
      .addCase(SignUpUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.message = ''; // Reset message when starting signup
      })
      .addCase(SignUpUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.message = action.payload.message;
        state.data = action.payload
      })
      .addCase(SignUpUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Signup failed';
        state.message = action.payload; // Display error message
      })

      // Forgot password actions
      .addCase(forgotPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.forgotPasswordSuccess = null;
      })
      .addCase(forgotPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.forgotPasswordSuccess = action.payload;
      })
      .addCase(forgotPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || 'Failed to reset password';
      })
      // Forgot password actions
      .addCase(resetPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.forgotPasswordSuccess = null;
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.forgotPasswordSuccess = action.payload;
        state.message = action.payload
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      // Forgot password actions
      .addCase(verifyOtp.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.forgotPasswordSuccess = null;
      })
      .addCase(verifyOtp.fulfilled, (state, action) => {
        state.loading = false;
        state.forgotPasswordSuccess = action.payload;
        state.data = action.payload
      })
      .addCase(verifyOtp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
