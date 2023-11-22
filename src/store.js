import { configureStore } from '@reduxjs/toolkit'
import  resultSlice  from './slice'

export const store = configureStore({
    reducer: {
        resultSlice: resultSlice,
    },
})