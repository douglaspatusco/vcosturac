import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise

    // Seleciona o banco de dados 'vania-costura'
    const db = client.db('vania-costura')

    // Verifica o método HTTP da requisição
    switch (req.method) {
      case 'GET': {
        // Se for GET, busca todos os documentos da coleção 'products'
        const items = await db.collection('products').find({}).toArray()

        res.status(200).json(items)
        break
      }
      case 'POST': {
        // Se for POST, pega os dados enviados no corpo da requisição
        const newItem = req.body

        // Insere os dados na coleção 'order-reports'
        const result = await db.collection('order-reports').insertOne(newItem)

        res.status(201).json(result)
        break
      }
      default:
        res.setHeader('Allow', ['GET', 'POST'])
        res.status(405).end(`Método ${req.method} não permitido`)
        break
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro ao conectar com o MongoDB', error })
  }
}
