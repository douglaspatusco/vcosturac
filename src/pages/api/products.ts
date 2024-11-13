import { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  id: number
  thumb: string
  name: string
  preco: number
  description: string
};

const products: Product[] = [
  {
    id: 1,
    thumb: 'https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_18_schock_preta_5907_1_9f65b96a1a223c80fe5bd40562cad95c.jpg',
    name: 'Mochila',
    preco: 200.00,
    description: 'Mochila com bolsos muito confortável.',
  },
  {
    id: 2,
    thumb: 'https://images.tcdn.com.br/img/img_prod/553674/bolsa_pochete_stones_em_couro_legitimo_2125_galvani_399_1_808bd33285d6c501efc660656a1d7ba1_20220614122441.jpg',
    name: 'Pochete',
    preco: 50.00,
    description: 'Pochete estilosa para todos os lugares.',
  },
  {
    id: 3,
    thumb: 'https://constance.vtexassets.com/arquivos/ids/2097666-1600-auto?v=637971288810530000&width=1600&height=auto&aspect=true',
    name: 'Bolsa',
    preco: 150.00,
    description: 'Bolsa feita para eventos de gala.',
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Retorna a lista de produtos com status 200
  res.status(200).json(products);
}
