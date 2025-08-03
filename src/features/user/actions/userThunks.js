import { createAsyncThunk } from "@reduxjs/toolkit";
import { getUserAPI, userUpdateAPI } from "../api/userAPI";
import { toast } from "react-toastify";
import axiosInstance from "../../../services/axiosInstance";



export const asyncCurrentUser = () => async (dispatch) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));        //Converts the string back into a JavaScript object
    if (user && user.email) {
      dispatch(LoginUser(user));
      console.log("Session restored for:", user.email);
    } else {
      console.warn("No user session found.");
      toast.error("Please sign in to continue");
    }
  } catch (error) {
    console.error("Failed to restore session:", error);
    toast.error("Session error. Please sign in again.");
  }
};

export const LoginUser = (user) => async (dispatch) => {
  try {
    const { data } = await axiosInstance.get(`/users?email=${user.email}`); // Only get user by email (json-server)
    const foundUser = data[0];

    if (foundUser && foundUser.password === user.password) {
      localStorage.setItem("user", JSON.stringify(foundUser)); // Save user to localStorage
      dispatch(asyncCurrentUser());                              // Set user in redux
      toast.success("Logged in successfully!");
      console.log("Login success:", foundUser);
    } else {
      toast.error("Wrong email or password");
      console.warn("Login failed: Invalid credentials");
    }
  } catch (error) {
    console.error("Login error userAction.jsx:", error);
    toast.error("Something went wrong. Please try again.");
  }
};

export const fetchUser = createAsyncThunk("user/fetch", async () => {
  return await getUserAPI();
});

export const updateUser = createAsyncThunk("user/update", async (user) => {
  return await userUpdateAPI(user);
});
