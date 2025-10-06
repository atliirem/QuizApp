import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";


const api = axios.create({
  baseURL: "https://opentdb.com/",
});


export const getToken = async (): Promise<string> => {
  let token = await AsyncStorage.getItem("@TOKEN");
  if (!token) {
    const res = await api.get("/api_token.php?command=request");
    token = res.data.token as string;
    await AsyncStorage.setItem("@TOKEN", token);
  }
  return token;
};


export const resetToken = async () => {
  const token = await AsyncStorage.getItem("@TOKEN");
  if (token) {
    await api.get(`/api_token.php?command=reset&token=${token}`);
  }
};



export const getCategories = createAsyncThunk(
  "categories/getCategories",
  async () => {
    const res = await api.get("/api_category.php");
    return res.data.trivia_categories;
  }
);
// export const getQuestions = createAsyncThunk(
//   "questions/getQuestions",
//   async (difficulty: "easy" | "medium" | "hard") => {
//     const url = `https://opentdb.com/api.php?amount=10&difficulty=${difficulty}`;
//     const res = await axios.get(url);
//     return res.data.results;
//   }
// );



export const getQuestions = createAsyncThunk(
  "questions/getQuestions",
  async ({
    categoryId,
    difficulty,
  }: { categoryId: number; difficulty: string }) => {
    const url = `https://opentdb.com/api.php?amount=10&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
    const res = await axios.get(url);
    return res.data.results;
  }
);

