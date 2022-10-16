import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../firebase"; // update path to your firestore config
const { createAsyncThunk } = require("@reduxjs/toolkit");

export const login = createAsyncThunk(
  "/login",
  async (_, { fulfillWithValue, rejectWithValue }) => {
    provider.setCustomParameters({ prompt: "select_account" });
    try {
      const result = await signInWithPopup(auth, provider);
      const {
        user,
        user: { accessToken },
      } = result;
      console.log("user", result);
      sessionStorage.setItem("ytc-access-token", user.accessToken);
      sessionStorage.setItem("ytc-user", JSON.stringify(user));
      return { user, accessToken };
    } catch (e) {
      console.log(e);
    }
  }
);

export const logout = createAsyncThunk('/logout', async (_, { fulfillWithValue, rejectWithValue }) => {
  try {
    await auth.signOut();
    sessionStorage.removeItem('ytc-access-token')
    sessionStorage.removeItem('ytc-user')
  } catch(e) {
    console.log(e);
  } 
});
