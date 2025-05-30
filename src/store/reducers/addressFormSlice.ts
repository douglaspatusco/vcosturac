import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  cep: '',
}

export const addressFormSlice = createSlice({
  name: 'addressForm',
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
    setCEP: (state, action) => {
      state.cep = action.payload
    },
    clearCEP: (state) => {
      state.cep = ''
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
  setCEP,
  clearCEP,
} = addressFormSlice.actions

export default addressFormSlice.reducer
