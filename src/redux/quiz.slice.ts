import { createSlice } from '@reduxjs/toolkit'
import {Problem, State} from '../interfaces/quiz'

const initialState : State = {
    data: [],
    results: [],
    isloaded: false,
    quizProgress: 0,
    score: 0
}

export const quizSlice = createSlice({
    name: 'quiz',
    initialState: {...initialState},
    reducers: {
        setData: (state: State, action: {payload: Array<Problem>})  => {
            state.data = [...action.payload]
            if(action.payload.length > 0) {
               state.isloaded = true;
            }
        },

        setResult: (state: State, action: {payload: string}) => {
            let index = state.results.length
            if(action.payload === state.data[index].correct_answer) {
                state.score ++;
            }
            state.results.push(action.payload);
        },

        startQuiz: (state: State) => {
            state.quizProgress = 1;
        },

        finishQuiz: (state: State) => {
            state.quizProgress = 2;
        },

        clearData: (state: State) => {
            state.results = []
            state.data = []
            state.isloaded = false
            state.quizProgress = 0
            state.score = 0
        }
    }
})

export const {setData, setResult, startQuiz, finishQuiz, clearData} = quizSlice.actions;

export default quizSlice.reducer;