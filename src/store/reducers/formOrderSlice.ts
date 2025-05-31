import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  surname: '',
  email: '',
  phone: '',
  street: '',
  number: '',
  complement: '',
  neighborhood: '',
  city: '',
  state: '',
  cep: '',
}

export const formOrderSlice = createSlice({
  name: 'formOrder',
  initialState,
  reducers: {
    setName: (state, action) => {
      state.name = action.payload
    },
    setSurname: (state, action) => {
      state.surname = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPhone: (state, action) => {
      state.phone = action.payload
    },
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
  setName,
  setSurname,
  setEmail,
  setPhone,
  setStreet,
  setNumber,
  setComplement,
  setNeighborhood,
  setCity,
  setState,
  setCEP,
  clearCEP,
} = formOrderSlice.actions
export default formOrderSlice.reducer
