import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: {}
};

export const quizzesSlice = createSlice({
  name: "quizzes",
  initialState: initialState,
  reducers: {
    addQuiz: {
      reducer: (state, action) => {
        const { id, topicId, name, cardIds } = action.payload;
        state.quizzes[id] = {
          id: id,
          topicId: topicId,
          name: name,
          cardIds: cardIds
        };
      }
    }
  }
});

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
