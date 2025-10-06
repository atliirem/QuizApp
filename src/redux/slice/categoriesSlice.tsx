import { createSlice } from "@reduxjs/toolkit";
import { getCategories } from "../../../api";

const categorySlice = createSlice({
  name: "categories",
  initialState: {
    data: [] as any[],
    loading: false,
    error: null as string | null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Kategori yüklenemedi";
      });
  },
});

export default categorySlice.reducer;
