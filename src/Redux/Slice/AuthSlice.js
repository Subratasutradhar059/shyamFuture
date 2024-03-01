import { createSlice } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        userData: null,  
        error: null
    },
    reducers: {
        addUser: (state, action) => {
            state.userData =  action.payload
            AsyncStorage.setItem("userData", JSON.stringify(action.payload)) 
        },
        removeUser: (state, action) => {
            AsyncStorage.clear();
            state.userData = null 
            state.error = null

        }
    }
})
export const { addUser, removeUser } = authSlice.actions;
export default authSlice.reducer;

