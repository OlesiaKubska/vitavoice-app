import axios from "src/api/axiosInstance";
import { createAsyncThunk } from "@reduxjs/toolkit";

// Register
export const register = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const res = await axios.post("/auth/register", formData);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);

// Login
export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post("/auth/login", credentials);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);

// Logout
export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await axios.post("/auth/logout");
    return true;
  } catch (error) {
    return thunkAPI.rejectWithValue("Logout failed");
  }
});

// Get current user profile
export const fetchProfile = createAsyncThunk(
  "auth/fetchProfile",
  async (token, thunkAPI) => {
    try {
      const res = await axios.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Failed to fetch profile");
    }
  }
);
