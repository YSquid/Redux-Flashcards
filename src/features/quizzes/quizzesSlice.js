import { createSlice } from "@reduxjs/toolkit";
import { addQuizIdsToTopicById } from "../topics/topicsSlice";

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

export const addQuizThunk = (quiz) => {
  return (dispatch) => {
    const { id, name, topicId, cardIds } = quiz;
    dispatch(
      addQuiz({ id: id, name: name, topicId: topicId, cardIds: cardIds })
    );
    dispatch(
      addQuizIdsToTopicById({quizId: id, topicId: topicId})
    );
  };
};

export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
