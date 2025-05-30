import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  name: '',
  surname: '',
  email: '',
  phone: '',
}

export const userFormSlice = createSlice({
  name: 'userForm',
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
  },
})

export const { setName, setSurname, setEmail, setPhone } = userFormSlice.actions
export default userFormSlice.reducer
