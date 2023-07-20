import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../redux/Store'


export interface CounterState {
imagepath:String;
}

const initialState: CounterState = {
  imagepath:"",
  
}
export const allSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
       addimageData:(state,action)=>{
        state.imagepath = action.payload.path;
       }
    },
  })

export  const {addimageData} = allSlice.actions

export const selectimagepath= (state:RootState)=>state.imagepathreducer.imagepath;

export default allSlice.reducer;