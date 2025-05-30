import { createAsyncThunk } from '@reduxjs/toolkit'
import { RootState } from '../index'

// Envia ou salva o relatório
export const generateReport = createAsyncThunk(
  'relatorio/gerar',
  async (_, { getState }) => {
    const state = getState() as RootState

    const dadosRelatorio = {
      name: state.userForm.name,
      surname: state.userForm.surname,
      telefone: state.userForm.phone,
      email: state.userForm.email,

      steet: state.addressForm.street,
      number: state.addressForm.number,
      complement: state.addressForm.complement,
      neighborhood: state.addressForm.neighborhood,
      city: state.addressForm.city,
      state: state.addressForm.state,
      cep: state.shipping.selectedFreight,

      cartItems: state.cart.cartItems,
      total: state.cart.total,

      time: state.time,
    }

    const jsonString = JSON.stringify(dadosRelatorio, null, 2)

    // Exemplo 1: salvar localmente
    sessionStorage.setItem('relatorioUsuario', jsonString)

    // Exemplo 2: enviar para backend (se tiver uma API)
    await fetch('/api/report', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: jsonString,
    })

    return jsonString
  }
)
