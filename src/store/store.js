import { configureStore } from "@reduxjs/toolkit";
import { quranAPP } from "./reducer";

export const store = configureStore({
  reducer: quranAPP,
});
