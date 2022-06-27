import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";
import auth from "@react-native-firebase/auth";
import {FirebaseAuthTypes} from "@react-native-firebase/auth";
import {createAsyncThunk} from "@reduxjs/toolkit";
import User = FirebaseAuthTypes.User;

export interface UserState {
    user: User | null
}

const initialState: UserState = {
    user: null
};

const logout = createAsyncThunk("user/logout", async () => {
    await auth().signOut();
});

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(logout.fulfilled, (state) => {
            state.user = null;
        });
    }
});

export const actions = userSlice.actions;

export const selectUser = (state: RootState) => state.testState.value;

export default userSlice.reducer;
