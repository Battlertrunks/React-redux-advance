import { createSlice } from "@reduxjs/toolkit";

const initialCartAmount = {
  itemsInCart: 0,
};

const cartAmountSlice = createSlice({
  name: "ui",
  initialState: initialCartAmount,
  reducers: {},
});
