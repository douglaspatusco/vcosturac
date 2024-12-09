import type { NextApiRequest, NextApiResponse } from 'next'
import clientPromise from '../../lib/mongodb'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const client = await clientPromise
    const db = client.db('vania_costura_criativa')

    switch (req.method) {
      case 'GET': {
        const items = await db.collection('products').find({}).toArray()
        res.status(200).json(items)
        break
      }
      case 'POST': {
        const newItem = req.body
        const result = await db.collection('products').insertOne(newItem)
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

// https://cloud.mongodb.com/v2/67448447e3343c1cbc8abebf#/metrics/replicaSet/674485a2894949025fb3e95f/explorer/vania_costura_criativa/products/find
