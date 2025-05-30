import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
}

export const deliveryFormSlice = createSlice({
  name: 'deliveryForm',
  initialState,
  reducers: {
    setStreet: (state, action) => {
      state.street = action.payload
    },
    setNumber: (state, action) => {
      state.number = action.payload
    },
    setComplement: (state, action) => {
      state.complement = action.payload
    },
    setNeighborhood: (state, action) => {
      state.neighborhood = action.payload
    },
    setCity: (state, action) => {
      state.city = action.payload
    },
    setState: (state, action) => {
      state.state = action.payload
    },
  },
})

export const {
  setStreet,
  setNumber,
  setComplement,
  setNeighborhood,
  setCity,
  setState,
} = deliveryFormSlice.actions

export default deliveryFormSlice.reducer
