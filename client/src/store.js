import { configureStore } from "@reduxjs/toolkit";
import topicReducer from "./features/wellness-resources/topicSlice";

const store = configureStore({ reducer: { topic: topicReducer } });

export default store;
