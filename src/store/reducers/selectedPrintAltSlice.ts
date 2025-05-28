import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectedPrintAltState {
  value: string
}

const initialState: SelectedPrintAltState = {
  value: '',
}

const selectedPrintAltSlice = createSlice({
  name: 'selectedPrintAlt',
  initialState,
  reducers: {
    setSelectedPrintAlt: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSelectedPrintAlt } = selectedPrintAltSlice.actions
export default selectedPrintAltSlice.reducer
