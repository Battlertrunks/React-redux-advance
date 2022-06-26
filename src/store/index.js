import uiSlice from "./ui-slice";
const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: { ui: uiSlice },
});

export default store;
