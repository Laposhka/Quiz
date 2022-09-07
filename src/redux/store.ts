import { configureStore } from "@reduxjs/toolkit";
import quizSlice from "./quiz.slice";
import resultSlice from "./result.slice";

export default configureStore({
    reducer: {
        quiz: quizSlice,
        result: resultSlice
    }
})