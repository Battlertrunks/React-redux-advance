const { createSlice } = require("@reduxjs/toolkit");

const initialCartToggle = {
  cartIsVisible: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState: initialCartToggle,
  reducers: {
    toggle(state) {
      state.cartIsVisible = !state.cartIsVisible;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice;
