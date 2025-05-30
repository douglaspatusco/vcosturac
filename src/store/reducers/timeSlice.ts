import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TimeState {
  timeStamp: string
}

const initialState: TimeState = {
  timeStamp: '',
}

const timeSlice = createSlice({
  name: 'time',
  initialState,
  reducers: {
    setTimeStamp: (state, action: PayloadAction<string>) => {
      state.timeStamp = action.payload
    },
  },
})

export const { setTimeStamp } = timeSlice.actions
export default timeSlice.reducer
