import { createSlice } from "@reduxjs/toolkit";
type InitState = {
    itGame: boolean;
    resultGame: boolean;
}
const initialState: InitState = {
    itGame: true,
    resultGame: false,
}
const gamePlaySlice = createSlice({
    name: "gamePlays",
    initialState,
    reducers: {
        winGame(state) {
            state.itGame = true;
            state.resultGame = true;
        },
        loseGame(state) {
            state.itGame = false;
            state.resultGame = true;
        },
        resetGame(state) {
            state.resultGame = false;
        }
    },
})
export const { loseGame, resetGame, winGame } = gamePlaySlice.actions
export default gamePlaySlice.reducer