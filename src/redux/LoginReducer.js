import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: "",
    password: "",
    login_Status: false,
  };
  
const loginSlice = createSlice({
    name: "login",
    initialState: initialState,
    reducers: {
        nameChanger(state, action) {
        state.name = action.payload;
        },
        passwordChanger(state, action) {
        state.password = action.payload;
        },
        status_changer(state){
        state.login_Status = true;
        }
    },
});

export default loginSlice;
export const loginAction = loginSlice.actions;