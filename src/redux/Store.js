import { configureStore } from "@reduxjs/toolkit";
import loginSlice from "./LoginReducer";
import cartReducer from "./CartReducer";
const mainStore =  configureStore({
  reducer: { 
    login: loginSlice.reducer,
    cart: cartReducer.reducer,
  },
});

export default mainStore;