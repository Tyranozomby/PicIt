import RNFireBase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import {combineReducers, createStore} from "redux";
import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./slices/test";
import { persistStore, persistReducer } from "redux-persist";


export const store = configureStore({
    reducer: {
        testState : testReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
