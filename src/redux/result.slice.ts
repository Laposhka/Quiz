import { createSlice } from '@reduxjs/toolkit'

export const resultSlice = createSlice({
    name: 'quiz',
    initialState: {
        play: 0
    },
    reducers: {
        playAgain: (state)  => {
            state.play ++;
        }
    }
})

export const {playAgain} = resultSlice.actions;

export default resultSlice.reducer;