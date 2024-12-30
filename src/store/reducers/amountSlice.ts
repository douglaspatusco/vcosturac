import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AmountState {
  value: number
}

const initialState: AmountState = {
  value: 1,
}

const amountSlice = createSlice({
  name: 'amount',
  initialState,
  reducers: {
    setAmountValue(state, action: PayloadAction<number>) {
      state.value = action.payload
    },
  },
})

export const { setAmountValue } = amountSlice.actions
export default amountSlice.reducer
