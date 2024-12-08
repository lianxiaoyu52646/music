import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IState {
  count:number
  message: string
  address:string
  height:number
  direction:'left' | 'right' | 'up' | 'down'
  names:string[]
}

const initialState:IState = {
  count:0,
  message:'',
  address:'',
  height:0,
  direction:'left',
  names:[]
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    changeMessageAction (state, {payload}: PayloadAction<string>) {
      state.message = payload
    }
  }
})

export const {changeMessageAction} = counterSlice.actions
export default counterSlice.reducer