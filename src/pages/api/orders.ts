import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '@/lib/mongodb'

// Endpoint que salva um pedido no banco de dados MongoDB
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ erro: 'Método não permitido' })
  }

  try {
    const client = await clientPromise
    const db = client.db('vania-costura')
    const orders = db.collection('order-reports')

    const order = req.body

    await orders.insertOne(order)

    res.status(200).json({ mensagem: 'Pedido salvo com sucesso!' })
  } catch (error) {
    console.error('Erro ao salvar pedido:', error)
    res.status(500).json({ erro: 'Erro interno ao salvar pedido' })
  }
}
