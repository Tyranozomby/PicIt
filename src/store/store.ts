import {configureStore} from "@reduxjs/toolkit";
import testReducer from "./slices/test";
import userReducer from "./slices/user";


export const store = configureStore({
    reducer: {
        testState: testReducer,
        userState: userReducer
    }
});

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
