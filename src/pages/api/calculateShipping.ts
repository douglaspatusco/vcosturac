import { NextApiRequest, NextApiResponse } from 'next'

// Chadamar a API do Melhor Envio para calcular o frete
const calculateShipping = async (cepDestino: string) => {
  const response = await fetch(
    'https://www.melhorenvio.com.br/api/v2/me/shipment/calculate',
    {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiIxIiwianRpIjoiMGUyNTMxZTcyZTI5NWYzMTY1NGU4YmVkODg2NTQzYWQyMWJmOGRmYmE5MDU3ODc4MmZmMTVmMTk2ZDg0ZTExYTQ0OGY1NTI0ZDMzYjkxNjAiLCJpYXQiOjE3MzQ1NTU5MTUuNTYyMTQzLCJuYmYiOjE3MzQ1NTU5MTUuNTYyMTQ1LCJleHAiOjE3NjYwOTE5MTUuNTQzMDc1LCJzdWIiOiI5ZGMxYmNlMi02YmY5LTQzYjktYjE4Ny1lOGE0OGJlYTQwNzciLCJzY29wZXMiOlsic2hpcHBpbmctY2FsY3VsYXRlIl19.KUANwjPhRUXMocKsOcqAxWXZgbIkRdGE5do65G6U5Z8-eJ1Lu_DrY0q6o9OESbCy-aebikF5ba-CM4aoTcAxfvj6Vd_bKdXwH2lvgRMnxDHEsLk2iFURomNmJ3vE4xaOb6pzfrniOUekhJCaQKicgZJCXsDRB4w_59B2XTZijt9PCnygcYZ9bm23NcV04NmEWFXuyBG6yTDP8Oebf_DK6jOBcrrIYISFOro41J1JuGEPCOlwv_db3Z7XNscRMAPrGTf5-JOq2n4NDA3QJnskU8BGSVtIO7m8bA122sICwYwhVX0GANQ5BTPcW3wt6eXqmPKmiRhD2QxsTlZMqSAIutAhle3DczaDxFQKkdyMO9n8FLxktdpGwZehC9mVlpy0GUj9F6AZnuykTNh3dNaI7HQB7aeydamyy8k53k3vO3gFafbmClxKwv4y1wMDhs-CoiLqkQT4q1LkcEL3S_daPbftV5ROS42eEmdK5Or0AY1QDPpbCKjbpyZIVFxADH_SRP7mIkDgF9EUoB07GujfuFiDOYJC9dtP2xYuHNAhufvJyKl8UIC8t-G1aRCol-8xNpMT7PnngYCZHPnCj-0fhyjFU0KPbIWyQOQbUSV5yZXIzqg2mNJGf83Ji2EZzuwrlzj8vJ8J56t1big_o-c8KJqQ3DXHZh8pmvGJsoDipw0`,
        'Content-Type': 'application/json',
        'User-Agent': 'Aplicação (douglaspatusco@gmail.com)',
      },
      body: JSON.stringify({
        from: { postal_code: '20540215' },
        to: { postal_code: cepDestino },
        package: { height: 20, width: 20, length: 20, weight: 0.5 },
        services: '1,2',
      }),
    }
  )

  if (!response.ok) {
    throw new Error('Erro ao calcular o frete')
  }

  return response.json()
}

// Função para lidar com as requisições
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'POST') {
    const { cepDestino } = req.body

    if (!cepDestino || typeof cepDestino !== 'string') {
      return res.status(400).json({ error: 'CEP de destino inválido' })
    }

    try {
      const data = await calculateShipping(cepDestino)
      res.status(200).json(data)
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error'
      res.status(500).json({ error: errorMessage })
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' })
  }
}
