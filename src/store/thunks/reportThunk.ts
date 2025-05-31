import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'

export const generateReport = createAsyncThunk(
  'report/generate',
  async (_, { getState }) => {
    const state = getState() as RootState

    const reportData = {
      nome: state.formOrder.name,
      sobrenome: state.formOrder.surname,
      telefone: state.formOrder.phone,
      email: state.formOrder.email,

      endereco: state.formOrder.street,
      numero: state.formOrder.number,
      complemento: state.formOrder.complement,
      bairro: state.formOrder.neighborhood,
      cidade: state.formOrder.city,
      estado: state.formOrder.state,
      cep: state.formOrder.cep,
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
      dataDoPedido: state.time.timeOrder,
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
