import RNFireBase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import {combineReducers, createStore} from "redux";
import {firebaseReducer, firestoreReducer} from "react-redux-firebase";
import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./slices/test";


export const rrfConfig = {
    enableRedirectHandling: false,
    userProfile: "users"
};


const initialState = {};

export const store = configureStore({
    reducer: {
        // firebase: firebaseReducer,
        testState : testReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
