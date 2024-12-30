import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface TransformOriginState {
  value: string
}

const initialState: TransformOriginState = {
  value: 'center center',
}

const transformOriginSlice = createSlice({
  name: 'transformOrigin',
  initialState,
  reducers: {
    setTransformOrigin: (state, action: PayloadAction<string>) => {
      state.value = action.payload
    },
  },
})

export const { setTransformOrigin } = transformOriginSlice.actions
export default transformOriginSlice.reducer
