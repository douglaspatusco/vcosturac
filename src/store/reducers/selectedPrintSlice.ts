import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectedPrintState {
  value: string
}

const initialState: SelectedPrintState = {
  value: '',
}

const selectedPrintSlice = createSlice({
  name: 'selectedPrint',
  initialState,
  reducers: {
    setSelectedPrint: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSelectedPrint } = selectedPrintSlice.actions
export default selectedPrintSlice.reducer
