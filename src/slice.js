import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    value : 0,
}
export const resultSlice = createSlice({
    name: 'result',
    initialState,
    reducers:{
        sum:(currentState, action)=>{
        let result  =  +action.payload.Firstvalue + +action.payload.second
        currentState.value = result
        // console.log('currentState' , currentState)
        // console.log('action' , action)
        },
        min:(currentState, action)=>{
            let result  =  +action.payload.Firstvalue - +action.payload.second
            currentState.value = result
            // console.log('currentState' , currentState)
            // console.log('action' , action)
        },
        over:(currentState, action)=>{
            let result  =  +action.payload.Firstvalue / +action.payload.second
            currentState.value = result
            // console.log('currentState' , currentState)
            // console.log('action' , action)
        },
        multi:(currentState, action)=>{
            let result  =  +action.payload.Firstvalue * +action.payload.second
            currentState.value = result
            // console.log('currentState' , currentState)
            // console.log('action' , action)
        },
    }
})

export const { sum , min ,over , multi } = resultSlice.actions
export default resultSlice.reducer
