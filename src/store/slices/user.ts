import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import auth, {FirebaseAuthTypes} from "@react-native-firebase/auth";

type User = FirebaseAuthTypes.User;

export interface UserState {
    loggedIn: boolean
}

const initialState: UserState = {
    loggedIn: false
};

export const logout = createAsyncThunk("user/logout", async () => {
    await auth().signOut();
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        login: (state) => {
            state.loggedIn = true;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, (state) => {
            state.loggedIn = false;
        });
    }
});

export const actions = userSlice.actions;
export default userSlice.reducer;
