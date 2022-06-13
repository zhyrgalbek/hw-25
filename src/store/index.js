import { configureStore } from "@reduxjs/toolkit";
import AuthorizationSlice from "./reducers/authorizationSlices";

export const store = configureStore({
    reducer: {
        user: AuthorizationSlice.reducer
    }
});