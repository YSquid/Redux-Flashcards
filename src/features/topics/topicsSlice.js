import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  topics: {}
};

export const topicsSlice = createSlice({
  name: "topics",
  initialState: initialState,
  reducers: {
    addTopic: {
      reducer: (state, action) => {
        const { id, name, icon } = action.payload;
        state.topics[id] = {
          id: id,
          name: name,
          icon: icon,
          quizIds: []
        };
      }
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic } = topicsSlice.actions;
export default topicsSlice.reducer;
