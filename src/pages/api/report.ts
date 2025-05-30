import { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs'
import path from 'path'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const relatorio = req.body

    // Caminho para salvar o arquivo JSON no servidor
    const filePath = path.join(
      process.cwd(),
      'relatorios',
      `relatorio-${Date.now()}.json`
    )

    // Garante que a pasta exista
    fs.mkdirSync(path.dirname(filePath), { recursive: true })

    // Salva o arquivo
    fs.writeFileSync(filePath, JSON.stringify(relatorio, null, 2))

    return res.status(200).json({ message: 'Relatório salvo com sucesso' })
  }

  return res.status(405).json({ message: 'Método não permitido' })
}
