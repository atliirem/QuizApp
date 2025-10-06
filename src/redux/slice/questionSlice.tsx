import { createSlice } from "@reduxjs/toolkit";
import { getQuestions } from "../../../api";

 const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    data: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {
    resetQuestions: (state) => {
      state.data = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getQuestions.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuestions.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getQuestions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Sorular yüklenemedi";
      });
  },
});

export const { resetQuestions } = questionsSlice.actions;
export default questionsSlice.reducer;
