import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface SelectedPrintImageState {
  value: string
}

const initialState: SelectedPrintImageState = {
  value: '',
}

const selectedPrintImageSlice = createSlice({
  name: 'selectedPrintImage',
  initialState,
  reducers: {
    setSelectedPrintImage: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setSelectedPrintImage } = selectedPrintImageSlice.actions
export default selectedPrintImageSlice.reducer
