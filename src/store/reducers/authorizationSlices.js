import { createSlice } from "@reduxjs/toolkit";

const iinitialState = {
    gmail: '',
    password: null,
    spinnerIsValid: false
};

const AuthorizationSlice = createSlice({
    name: 'user',
    initialState: iinitialState,
    reducers: {
        login(state, action){
            localStorage.setItem('dostup', 1);
            if(localStorage.getItem('dostup')){
                state.dostup = !state.dostup;
            }
            state.gmail = action.payload.gmail;
            state.password = action.payload.password
        },
        ExitUser(state){
            localStorage.removeItem('dostup');
            if(!localStorage.getItem('dostup')){
                state.gmail = '';
                state.password = null;
                state.dostup = !state.dostup;
            }
        },
        StartSpinner(state){
            state.spinnerIsValid = true;
        },
        EndSpinner(state){
            state.spinnerIsValid = false;
        }
    }
});

export const loginAction = AuthorizationSlice.actions;
export default AuthorizationSlice;

export function FetchUser(data){
    return (dispatch)=>{
        dispatch(loginAction.StartSpinner());
        setTimeout(()=>{
            dispatch(loginAction.EndSpinner());
            dispatch(loginAction.login(data));
        }, 2000);
    }
}

export function ExitUser(){
    return (dispatch)=>{
        dispatch(loginAction.StartSpinner());
        setTimeout(()=>{
            dispatch(loginAction.EndSpinner());
            dispatch(loginAction.ExitUser());
        }, 2000);
    }
}




