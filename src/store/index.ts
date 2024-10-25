import { configureStore } from '@reduxjs/toolkit'
import GamePlaySlice from '../features/GamePlay/GamePlaySlice'
export const store = configureStore({
    reducer: {
        gamePlays: GamePlaySlice
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch