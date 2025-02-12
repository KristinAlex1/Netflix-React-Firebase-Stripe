import { configureStore } from "@reduxjs/toolkit";
import userReducer from "/src/features/userSlice.js"; // Replace with the path to your slice file

const store = configureStore({
  reducer: {
    user: userReducer, // Add your reducers here
  },
});

export default store;
