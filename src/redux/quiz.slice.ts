import { createSlice } from '@reduxjs/toolkit'
import {Problem, State} from '../types/quiz'

const initialState : State = {
    data: [],
    results: [],
    isloaded: false,
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

        clearData: (state: State) => {
            state.results = []
            state.data = []
            state.isloaded = false
            state.score = 0
        }
    }
})

export const {setData, setResult, clearData} = quizSlice.actions;

export default quizSlice.reducer;