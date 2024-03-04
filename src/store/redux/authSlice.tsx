import { createSlice } from "@reduxjs/toolkit"
import { RootState } from "./store";


const initialState = {
    isAuthenticated: false,
   
}


const authSlice = createSlice({
    name: 'auth',
    initialState : {
        isAuthenticated: false,
    },
    reducers:{
        authenticate:(state)=>{
            state.isAuthenticated = true;
            console.log(state.isAuthenticated)
        
        },
        logout:(state)=>{
            state.isAuthenticated = false;
            console.log(state.isAuthenticated)
          
        }
    }
});

export const authenticate = authSlice.actions.authenticate;
export const logout = authSlice.actions.logout;

export const selectIsAuthenticated = (state:RootState) => state.auth.isAuthenticated

export default authSlice.reducer;