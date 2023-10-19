import { createSlice } from "@reduxjs/toolkit";
import { wellnessData } from "../../data/wellnessResourceData";

const initialState = { currentTopic: "" };

const topicSlice = createSlice({
  name: "topic",
  initialState,
  reducers: {
    updateTopic(state, action) {
      state.currentTopic = wellnessData.find(
        (curr) => curr.topic === action.payload,
      );
    },
  },
});

export const { updateTopic } = topicSlice.actions;
export default topicSlice.reducer;
