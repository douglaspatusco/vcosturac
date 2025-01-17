import { NextApiRequest, NextApiResponse } from 'next'

const products: Product[] = [
  {
    selectedPrint: '',
    selectedPrintImage: '',
    id: '1',
    category: 'mochilas',
    slug: 'mochila-escolar',
    name: 'Mochila Escolar',
    price: 200.0,
    division: '2x',
    installment: 100.0,
    description: 'Mochila acolchoada com vários bolsos.',
    details:
      'Capacidade: 50 litros.<br /> Material: Tecido impermeável.<br /> Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.<br /> Organização: Múltiplos compartimentos internos e externos. Durabilidade: Confeccionada para resistir a condições extremas.',
    medias: {
      thumbnail:
        'https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_18_schock_preta_5907_1_9f65b96a1a223c80fe5bd40562cad95c.jpg',
      prints: {
        floral: [
          {
            alt: 'Mochila Floral Encanto',
            src: 'https://images.tcdn.com.br/img/img_prod/876307/mochila_farm_xodo_floral_encanto_78315304_caramelo_floral_37269_1_5477ef8af6fdde64f68e50404e083249.jpg',
          },
          {
            alt: 'Mochila Floral Colorido',
            src: 'https://lebiscuit.vtexassets.com/arquivos/ids/3401689/5132782_00000_01.jpg',
          },
          {
            alt: 'Mochila Floral e Listrada',
            src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418574850/large/mochila-feminina-universitaria-ou-escolar-floral-alto-relevo_156507.JPG',
          },
        ],
        listrado: [
          {
            alt: 'Mochila Listrada com Estrelas do Mar',
            src: 'https://a-static.mlcdn.com.br/800x600/mochila-teen-clio-quadrada-listrada-modelo-mf8021-item-sortido-brigth/lojaslebiscuit/2147330402/eecc72828d79e335751b2e76c6ce5c50.jpeg',
          },
          {
            alt: 'Mochila Cross Style',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-cross-style-listras-estampa-juvenil-escolar-casual-clio-style/olistplus/opmj4liem8immpgq/48f382387562fda46123d96e609f3e77.jpeg',
          },
          {
            alt: 'Mochila Feminina Escolar',
            src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418577036/large/mochila-feminina-escolar-juvenil-estampa-floral-e-listrada_163163.JPG',
          },
        ],
        geometrico: [
          {
            alt: 'Mochila Geometrix',
            src: 'https://i.zst.com.br/thumbs/12/38/3d/1972508439.jpg',
          },
          {
            alt: 'Mochila Bansusu',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-bansusu-com-estampa-geometrica-para-meninos-do-ensino-medio/nocnoceua/aub07cjz55z2/ad6cd78e60a031e0a5a0a7c430323f26.jpeg',
          },
          {
            alt: 'Mochila Jiayou Girl',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-escolar-jiayou-girl-com-estampa-geometrica-35l-roxa/nocnoceua/aub07gnjpdt5/3c02d0adb9d21127f4361192432be88c.jpeg',
          },
        ],
        semEstampa: [
          {
            alt: 'Mochila Pompom',
            src: 'https://img.lojasrenner.com.br/item/927637390/original/3.jpg',
          },
          {
            alt: 'Mochila Winth',
            src: 'https://acdn.mitiendanube.com/stores/004/525/681/products/standard_resolution-ca4f9fef09b3f79b3c17235731916746-1024-1024.jpg',
          },
          {
            alt: 'Mochila Crinkle',
            src: 'https://images.tcdn.com.br/img/img_prod/638637/mochila_crinkle_com_matelasse_17_5_1060_1_3ebc70be3a3ffdfc76399381b9ad751c.jpg',
          },
        ],
      },
    },
  },
  {
    selectedPrint: '',
    selectedPrintImage: '',
    id: '4',
    category: 'mochilas',
    slug: 'mochila-de-couro',
    name: 'Mochila de Couro',
    price: 390.0,
    division: '2x',
    installment: 195.0,
    description: 'Mochila com bolsos muito confortável.',
    details:
      'Capacidade: 50 litros.<br /> Material: Tecido impermeável.<br /> Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.<br /> Organização: Múltiplos compartimentos internos e externos. Durabilidade: Confeccionada para resistir a condições extremas.',
    medias: {
      thumbnail:
        'https://images.tcdn.com.br/img/img_prod/732403/mochila_executiva_grande_de_couro_legitimo_bovino_notebook_3_1_20200415154531.jpg',
      prints: {
        floral: [
          {
            alt: 'Floral Branco',
            src: 'https://cdn.awsli.com.br/800x800/200/200534/produto/39526078/18fcc9bbff.jpg',
          },
          {
            alt: 'Buquê Amarelinho',
            src: 'https://images.tcdn.com.br/img/img_prod/1151257/mochila_farm_xodo_floral_ararajuba_8305_1_71b03f8172dc5750be9042f1ff112a88.jpg',
          },
          {
            alt: 'Borboleta nas Flores',
            src: 'https://images.tcdn.com.br/img/img_prod/792823/mochila_farm_xodo_delicadeza_romantica_12024_1_55a93312afd344eb7d80063c504f00ae.jpg',
          },
        ],
        listrado: [
          {
            alt: 'Listrada laranja',
            src: 'https://down-br.img.susercontent.com/file/732399a1d2b913c0aa990b8b0260010b',
          },
          {
            alt: 'Listrada Azul',
            src: 'https://a-static.mlcdn.com.br/1500x1500/mochila-feminina-viagem-couro-impermeavel-listrada-azul-porta-niquel-shamrock/velkrosales/mochfemlist01blue/13b451f8ea53d89e7b7df1d31be86292.jpeg',
          },
          {
            alt: 'Listrada Rosa',
            src: 'https://a-static.mlcdn.com.br/800x560/kit-mochila-feminina-faculdade-couro-listrada-vermelha-porta-niquel-shamrock/velkrosales/mochfemlist01red/26360c9fa63186065edbdd08bf3dac70.jpeg',
          },
          {
            alt: 'Listrada Preta',
            src: 'https://down-br.img.susercontent.com/file/8a4f95efead61f8b23c12fb0252bfdcf',
          },
        ],
        geometrico: [
          {
            alt: 'Mochila Geometrix',
            src: 'https://i.zst.com.br/thumbs/12/38/3d/1972508439.jpg',
          },
          {
            alt: 'Mochila Bansusu',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-bansusu-com-estampa-geometrica-para-meninos-do-ensino-medio/nocnoceua/aub07cjz55z2/ad6cd78e60a031e0a5a0a7c430323f26.jpeg',
          },
          {
            alt: 'Mochila Jiayou Girl',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-escolar-jiayou-girl-com-estampa-geometrica-35l-roxa/nocnoceua/aub07gnjpdt5/3c02d0adb9d21127f4361192432be88c.jpeg',
          },
        ],
        semEstampa: [
          {
            alt: 'Mochila Pompom',
            src: 'https://img.lojasrenner.com.br/item/927637390/original/3.jpg',
          },
          {
            alt: 'Mochila Winth',
            src: 'https://acdn.mitiendanube.com/stores/004/525/681/products/standard_resolution-ca4f9fef09b3f79b3c17235731916746-1024-1024.jpg',
          },
          {
            alt: 'Mochila Crinkle',
            src: 'https://images.tcdn.com.br/img/img_prod/638637/mochila_crinkle_com_matelasse_17_5_1060_1_3ebc70be3a3ffdfc76399381b9ad751c.jpg',
          },
        ],
      },
    },
  },
  {
    selectedPrint: '',
    selectedPrintImage: '',
    id: '2',
    category: 'pochetes',
    slug: 'pochete-de-carnaval',
    name: 'Pochete de Carnaval',
    price: 50.0,
    division: '2x',
    installment: 25.0,
    description: 'Pochete estilosa para todos os lugares.',
    details:
      'Capacidade: 50 litros.<br /> Material: Tecido impermeável.<br /> Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.<br /> Organização: Múltiplos compartimentos internos e externos. Durabilidade: Confeccionada para resistir a condições extremas.',
    medias: {
      thumbnail:
        'https://images.tcdn.com.br/img/img_prod/553674/bolsa_pochete_stones_em_couro_legitimo_2125_galvani_399_1_808bd33285d6c501efc660656a1d7ba1_20220614122441.jpg',
      prints: {
        listrado: [
          {
            alt: 'Carnaval Hippie',
            src: 'https://m.media-amazon.com/images/I/71xPX0UFugL._AC_SX425_.jpg',
          },
          {
            alt: 'Rosa com Linhas Arco Íris',
            src: 'https://down-br.img.susercontent.com/file/6c7bc3b5bbaff02ead3b11c4ed04210b',
          },
          {
            alt: 'Sol e Praia',
            src: 'https://m.media-amazon.com/images/I/61My-qd6wWL._AC_UY1000_.jpg',
          },
        ],
        geometrico: [
          {
            alt: 'Rosa Geometrix',
            src: 'https://m.media-amazon.com/images/I/619-1cuuiPL._AC_UY1000_.jpg',
          },
          {
            alt: "Aquarela N'água",
            src: 'https://m.media-amazon.com/images/I/61Y9eTiNc9L._AC_UY1000_.jpg',
          },
          {
            alt: 'Camuflado Colorido',
            src: 'https://m.media-amazon.com/images/I/61kt2XUMXjL._AC_UY1000_.jpg',
          },
        ],
      },
    },
  },
  {
    selectedPrint: '',
    selectedPrintImage: '',
    id: '3',
    name: 'Bolsa Rosa',
    category: 'bolsas',
    slug: 'bolsa-rosa',
    price: 150.0,
    division: '2x',
    installment: 75.0,
    description: 'Bolsa feita para eventos de gala.',
    details:
      'Capacidade: 50 litros.<br /> Material: Tecido impermeável.<br /> Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.<br /> Organização: Múltiplos compartimentos internos e externos. Durabilidade: Confeccionada para resistir a condições extremas.',
    medias: {
      thumbnail:
        'https://constance.vtexassets.com/arquivos/ids/2097666-1600-auto?v=637971288810530000&width=1600&height=auto&aspect=true',
      prints: {
        floral: [
          {
            alt: 'Mochila Floral Encanto',
            src: 'https://images.tcdn.com.br/img/img_prod/876307/mochila_farm_xodo_floral_encanto_78315304_caramelo_floral_37269_1_5477ef8af6fdde64f68e50404e083249.jpg',
          },
          {
            alt: '',
            src: 'https://lebiscuit.vtexassets.com/arquivos/ids/3401689/5132782_00000_01.jpg',
          },
          {
            alt: 'Mochila Floral e Listrada',
            src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418574850/large/mochila-feminina-universitaria-ou-escolar-floral-alto-relevo_156507.JPG',
          },
        ],
      },
    },
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Retorna a lista de produtos com status 200
  res.status(200).json(products)
}
