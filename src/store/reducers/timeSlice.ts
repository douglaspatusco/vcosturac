import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimeState {
  timeStamp: string
  timeOrder?: string
}

const initialState: TimeState = {
  timeStamp: '',
  timeOrder: '',
}

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTimeOrder: (state, action: PayloadAction<string>) => {
      state.timeOrder = action.payload
    },
    setTimeStamp: (state, action: PayloadAction<string>) => {
      state.timeStamp = action.payload
    },
  },
})

export const { setTimeOrder, setTimeStamp } = timeSlice.actions
export default timeSlice.reducer
