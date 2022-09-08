import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz.slice";

export default configureStore({
    reducer: {
        quiz: quizSlice,
    }
})