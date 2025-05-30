import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'

export const generateReport = createAsyncThunk(
  'report/generate',
  async (_, { getState }) => {
    const state = getState() as RootState

    const reportData = {
      name: state.userForm.name,
      surname: state.userForm.surname,
      phone: state.userForm.phone,
      email: state.userForm.email,

      street: state.addressForm.street,
      number: state.addressForm.number,
      complement: state.addressForm.complement,
      neighborhood: state.addressForm.neighborhood,
      city: state.addressForm.city,
      state: state.addressForm.state,
      selectedFreightName: state.shipping.selectedFreight?.name,
      selectedFreightPrice: state.shipping.selectedFreight?.price,

      cartItems: state.cart.cartItems.map((item) => ({
        name: item.name,
        price: item.price,
        quantity: item.quantity,
      })),
      total: state.cart.total,

      timeOrder: state.time.timeOrder,
      timeStamp: state.time.timeStamp,
    }

    const jsonString = JSON.stringify(reportData, null, 2)

    await fetch('/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString,
    })

    return jsonString
  }
)
