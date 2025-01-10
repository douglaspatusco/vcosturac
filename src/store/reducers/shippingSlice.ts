import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface FreightOption {
  name: string
  price: string
}

interface ShippingState {
  selectedFreight: FreightOption | null
}

const initialState: ShippingState = {
  selectedFreight: null,
}

const shippingSlice = createSlice({
  name: 'shipping',
  initialState,
  reducers: {
    setSelectedFreight: (
      state,
      action: PayloadAction<FreightOption | null>
    ) => {
      state.selectedFreight = action.payload
    },
  },
})

export const { setSelectedFreight } = shippingSlice.actions
export default shippingSlice.reducer
