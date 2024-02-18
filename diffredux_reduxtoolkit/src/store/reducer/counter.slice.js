import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
    increasePayload: (state, actions) => {
      state.value += actions.payload;
    },
  },
});

/* 
return မလို 
action ခွဲစရာမလို
*/

export const { increase, decrease, increasePayload } = counterSlice.actions;

export default counterSlice.reducer;
