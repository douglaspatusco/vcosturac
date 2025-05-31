import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'

export const generateReport = createAsyncThunk(
  'report/generate',
  async (_, { getState }) => {
    const state = getState() as RootState

    const reportData = {
      nome: state.userForm.name,
      sobrenome: state.userForm.surname,
      telefone: state.userForm.phone,
      email: state.userForm.email,

      endereco: state.addressForm.street,
      numero: state.addressForm.number,
      complemento: state.addressForm.complement,
      bairro: state.addressForm.neighborhood,
      cidade: state.addressForm.city,
      estado: state.addressForm.state,
      opcaoDeEntrega: state.shipping.selectedFreight?.name,
      precoDoFrete: state.shipping.selectedFreight?.price,

      itensDoCarrinho: state.cart.cartItems.map((item) => ({
        produto: item.name,
        tema: item.selectedPrint,
        estampa: item.selectedPrintAlt,
        preco: item.price,
        quantidade: item.quantity,
      })),
      total: state.cart.total,

      horaDoPedido: state.time.timeOrder,
      codigoDoPedido: state.time.timeStamp,
    }

    const jsonString = JSON.stringify(reportData, null, 2)

    await fetch('/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString,
    })

    await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(reportData),
    })

    return jsonString
  }
)
