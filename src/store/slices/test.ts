import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "../store";

export interface TestState {
    value: number
}

const initialState: TestState = {
    value: 0
};

export const testSlice = createSlice({
    name: "test",
    initialState,
    reducers: {
        increment: state => {state.value += 1;},
        decrement: state => {state.value += 1;},
        incrementBy: (state,action: PayloadAction<number>) => {state.value += action.payload;}

    }
});

export const actions = testSlice.actions;

export const selectCount = (state: RootState) => state.testState.value;

export default testSlice.reducer;
