import RNFireBase from "@react-native-firebase/app";
import auth from "@react-native-firebase/auth";
import {combineReducers, createStore} from "redux";
import {firebaseReducer, firestoreReducer} from "react-redux-firebase";
import {configureStore} from "@reduxjs/toolkit";
//
//
// const firebase = RNFireBase.app();
//
// const rrfConfig = {
//     userProfile: "users"
// };
//
// const rootReducer = combineReducers({
//     firebase: firebaseReducer,
//     firestore: firestoreReducer // <- needed if using firestore
// });
//
// // Create store with reducers and initial state
// const initialState = {};
// export const store = configureStore({
//     reducer: rootReducer
// });
//
// export const rrfProps = {
//     firebase,
//     config: rrfConfig,
//     dispatch: store.dispatch
//     // createFirestoreInstance // <- needed if using firestore
// };
//
// export type RootState = ReturnType<typeof store.getState>
// // Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
// export type AppDispatch = typeof store.dispatch
