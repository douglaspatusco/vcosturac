import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectedPrintSrcState {
  value: string
}

const initialState: SelectedPrintSrcState = {
  value: '',
}

const selectedPrintSrcSlice = createSlice({
  name: 'selectedPrintSrc',
  initialState,
  reducers: {
    setSelectedPrintSrc: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSelectedPrintSrc } = selectedPrintSrcSlice.actions
export default selectedPrintSrcSlice.reducer
