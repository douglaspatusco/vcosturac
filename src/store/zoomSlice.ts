import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ZoomState {
  isZoomed: boolean
}

const initialState: ZoomState = {
  isZoomed: false,
}

const zoomSlice = createSlice({
  name: 'zoom',
  initialState,
  reducers: {
    setIsZoomed(state, action: PayloadAction<boolean>) {
      state.isZoomed = action.payload
    },
  },
})

export const { setIsZoomed } = zoomSlice.actions
export default zoomSlice.reducer
