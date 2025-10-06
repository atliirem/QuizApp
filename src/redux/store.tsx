import { configureStore } from "@reduxjs/toolkit";
import categoriesReducer from "./slice/categoriesSlice";
import questionsReducer from "./slice/questionSlice";
import logger from 'redux-logger'; // redux-logger paketi

export const store = configureStore({
  reducer: {
    categories: categoriesReducer,
    questions: questionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
