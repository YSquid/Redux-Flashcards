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
    },
    addQuizIdsToTopicById: {
      reducer: (state, action) => {
        const { quizId, topicId } = action.payload;
        state.topics[topicId].quizIds.push(quizId);
      }
    }
  }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuizIdsToTopicById } = topicsSlice.actions;
export default topicsSlice.reducer;
