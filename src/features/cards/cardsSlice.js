import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cards: {}
};

export const cardsSlice = createSlice({
  name: "cards",
  initialState: initialState,
  reducers: {
    addCard: {
      reducer: (state, action) => {
        const { id, front, back } = action.payload;
        state.cards[id] = {
          id: id,
          front: front,
          back: back
        };
      }
    }
  }
});

export const selectCards = (state) => state.cards.cards;
export const { addCard } = cardsSlice.actions;
export default cardsSlice.reducer;
