import { NextApiRequest, NextApiResponse } from 'next'

const products: Product[] = [
  {
    id: '1',
    category: 'mochilas',
    name: 'Mochila Escolar',
    price: 200.0,
    description: 'Mochila acolchoada com vários bolsos.',
    details:
      'Capacidade: 50 litros.<br /> Material: Tecido impermeável.<br /> Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.<br /> Organização: Múltiplos compartimentos internos e externos. Durabilidade: Confeccionada para resistir a condições extremas.',
    medias: {
      mainThumbnail:
        'https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_18_schock_preta_5907_1_9f65b96a1a223c80fe5bd40562cad95c.jpg',
        floral: {
          thumbnail: 'https://cdn.awsli.com.br/2500x2500/2220/2220511/produto/176766434/tecidos-tricoline-tecido-tricoline-digital-flores-ref-9017-cor-304--p-1690983761-viv6bctvh3.png',
          pics: [
            {
              title: 'Mochila Floral Encanto',
              alt: 'Mochila Floral Encanto',
              src: 'https://images.tcdn.com.br/img/img_prod/876307/mochila_farm_xodo_floral_encanto_78315304_caramelo_floral_37269_1_5477ef8af6fdde64f68e50404e083249.jpg',
            },
            {
              title: 'Mochila Floral Colorido',
              alt: 'Mochila Floral Colorido',
              src: 'https://lebiscuit.vtexassets.com/arquivos/ids/3401689/5132782_00000_01.jpg',
            },
            {
              title: 'Mochila Floral e Listrada',
              alt: 'Mochila Floral e Listrada',
              src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418574850/large/mochila-feminina-universitaria-ou-escolar-floral-alto-relevo_156507.JPG',
            },
          ]
        },
        listrado: {
          thumbnail: 'https://images.tcdn.com.br/img/img_prod/1057913/estampa_listrado_texturizado_577_1_97a65b787864bc1cc60c02262baee29c.jpg',
          pics: [
            {
              title: 'Mochila Listrada com Estrelas do Mar',
              alt: 'Mochila Listrada com Estrelas do Mar',
              src: 'https://m.media-amazon.com/images/I/61hF-5A2zWL._AC_SX522_.jpg',
            },
            {
              title: 'Mochila Cross Style',
              alt: 'Mochila Cross Style',
              src: 'https://a-static.mlcdn.com.br/800x560/mochila-cross-style-listras-estampa-juvenil-escolar-casual-clio-style/olistplus/opmj4liem8immpgq/48f382387562fda46123d96e609f3e77.jpeg',
            },
            {
              title: 'Mochila Feminina Escolar',
              alt: 'Mochila Feminina Escolar',
              src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418577036/large/mochila-feminina-escolar-juvenil-estampa-floral-e-listrada_163163.JPG',
            },
          ]
        },
      geometrico: {
        thumbnail: 'https://img.freepik.com/vetores-premium/estampa-geometrica_598830-6.jpg',
        pics: [
          {
            title: 'Mochila Geometrix',
            alt: 'Mochila Geometrix',
            src: 'https://i.zst.com.br/thumbs/12/38/3d/1972508439.jpg',
          },
          {
            title: 'Mochila Bansusu',
            alt: 'Mochila Bansusu',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-bansusu-com-estampa-geometrica-para-meninos-do-ensino-medio/nocnoceua/aub07cjz55z2/ad6cd78e60a031e0a5a0a7c430323f26.jpeg',
          },
          {
            title: 'Mochila Jiayou Girl',
            alt: 'Mochila Jiayou Girl',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-escolar-jiayou-girl-com-estampa-geometrica-35l-roxa/nocnoceua/aub07gnjpdt5/3c02d0adb9d21127f4361192432be88c.jpeg',
          },
        ],
      },
      semEstampa: {
        thumbnail: 'https://w7.pngwing.com/pngs/349/570/png-transparent-colorful-rainbow-gradient-colorful-rainbow-gradient-colorful-rainbow-circle-gradual-change.png',
        pics: [
          {
            title: 'Mochila Pompom',
            alt: 'Mochila Pompom',
            src: 'https://img.lojasrenner.com.br/item/927637390/original/3.jpg',
          },
          {
            title: 'Mochila Winth',
            alt: 'Mochila Winth',
            src: 'https://acdn.mitiendanube.com/stores/004/525/681/products/standard_resolution-ca4f9fef09b3f79b3c17235731916746-1024-1024.jpg',
          },
          {
            title: 'Mochila Crinkle',
            alt: 'Mochila Crinkle',
            src: 'https://images.tcdn.com.br/img/img_prod/638637/mochila_crinkle_com_matelasse_17_5_1060_1_3ebc70be3a3ffdfc76399381b9ad751c.jpg',
          },
        ],
      }
    },
  },
  {
    id: '4',
    category: 'mochilas',
    name: 'Mochila de Couro',
    price: 200.0,
    description: 'Mochila com bolsos muito confortável.',
    details:
      'Capacidade: 50 litros.<br /> Material: Tecido impermeável.<br /> Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.<br /> Organização: Múltiplos compartimentos internos e externos. Durabilidade: Confeccionada para resistir a condições extremas.',
    medias: {
      mainThumbnail:
        'https://images.tcdn.com.br/img/img_prod/886231/mochila_masculina_18_schock_preta_5907_1_9f65b96a1a223c80fe5bd40562cad95c.jpg',
        floral: {
          thumbnail: 'https://cdn.awsli.com.br/2500x2500/2220/2220511/produto/176766434/tecidos-tricoline-tecido-tricoline-digital-flores-ref-9017-cor-304--p-1690983761-viv6bctvh3.png',
          pics: [
            {
              title: 'Mochila Floral Encanto',
              alt: 'Mochila Floral Encanto',
              src: 'https://images.tcdn.com.br/img/img_prod/876307/mochila_farm_xodo_floral_encanto_78315304_caramelo_floral_37269_1_5477ef8af6fdde64f68e50404e083249.jpg',
            },
            {
              title: 'Mochila Floral Colorido',
              alt: '',
              src: 'https://lebiscuit.vtexassets.com/arquivos/ids/3401689/5132782_00000_01.jpg',
            },
            {
              title: 'Mochila Floral e Listrada',
              alt: 'Mochila Floral e Listrada',
              src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418574850/large/mochila-feminina-universitaria-ou-escolar-floral-alto-relevo_156507.JPG',
            },
          ]
        },
        listrado: {
          thumbnail: 'https://images.tcdn.com.br/img/img_prod/1057913/estampa_listrado_texturizado_577_1_97a65b787864bc1cc60c02262baee29c.jpg',
          pics: [
            {
              title: 'Mochila Listrada com Estrelas do Mar',
              alt: 'Mochila Listrada com Estrelas do Mar',
              src: 'https://m.media-amazon.com/images/I/61hF-5A2zWL._AC_SX522_.jpg',
            },
            {
              title: 'Mochila Cross Style',
              alt: 'Mochila Cross Style',
              src: 'https://a-static.mlcdn.com.br/800x560/mochila-cross-style-listras-estampa-juvenil-escolar-casual-clio-style/olistplus/opmj4liem8immpgq/48f382387562fda46123d96e609f3e77.jpeg',
            },
            {
              title: 'Mochila Feminina Escolar',
              alt: 'Mochila Feminina Escolar',
              src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418577036/large/mochila-feminina-escolar-juvenil-estampa-floral-e-listrada_163163.JPG',
            },
          ]
        },
      geometrico: {
        thumbnail: 'https://img.freepik.com/vetores-premium/estampa-geometrica_598830-6.jpg',
        pics: [
          {
            title: 'Mochila Geometrix',
            alt: 'Mochila Geometrix',
            src: 'https://i.zst.com.br/thumbs/12/38/3d/1972508439.jpg',
          },
          {
            title: 'Mochila Bansusu',
            alt: 'Mochila Bansusu',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-bansusu-com-estampa-geometrica-para-meninos-do-ensino-medio/nocnoceua/aub07cjz55z2/ad6cd78e60a031e0a5a0a7c430323f26.jpeg',
          },
          {
            title: 'Mochila Jiayou Girl',
            alt: 'Mochila Jiayou Girl',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-escolar-jiayou-girl-com-estampa-geometrica-35l-roxa/nocnoceua/aub07gnjpdt5/3c02d0adb9d21127f4361192432be88c.jpeg',
          },
        ],
      },
      semEstampa: {
        thumbnail: 'https://w7.pngwing.com/pngs/349/570/png-transparent-colorful-rainbow-gradient-colorful-rainbow-gradient-colorful-rainbow-circle-gradual-change.png',
        pics: [
          {
            title: 'Mochila Pompom',
            alt: 'Mochila Pompom',
            src: 'https://img.lojasrenner.com.br/item/927637390/original/3.jpg',
          },
          {
            title: 'Mochila Winth',
            alt: 'Mochila Winth',
            src: 'https://acdn.mitiendanube.com/stores/004/525/681/products/standard_resolution-ca4f9fef09b3f79b3c17235731916746-1024-1024.jpg',
          },
          {
            title: 'Mochila Crinkle',
            alt: 'Mochila Crinkle',
            src: 'https://images.tcdn.com.br/img/img_prod/638637/mochila_crinkle_com_matelasse_17_5_1060_1_3ebc70be3a3ffdfc76399381b9ad751c.jpg',
          },
        ],
      }
    },
  },
  {
    id: '2',
    category: 'pochetes',
    name: 'Pochete de Carnaval',
    price: 50.0,
    description: 'Pochete estilosa para todos os lugares.',
    details:
      'Capacidade: 50 litros.<br /> Material: Tecido impermeável.<br /> Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.<br /> Organização: Múltiplos compartimentos internos e externos. Durabilidade: Confeccionada para resistir a condições extremas.',
    medias: {
      mainThumbnail: 'https://images.tcdn.com.br/img/img_prod/553674/bolsa_pochete_stones_em_couro_legitimo_2125_galvani_399_1_808bd33285d6c501efc660656a1d7ba1_20220614122441.jpg',
        listrado: {
          thumbnail: 'https://images.tcdn.com.br/img/img_prod/1057913/estampa_listrado_texturizado_577_1_97a65b787864bc1cc60c02262baee29c.jpg',
          pics: [
            {
              title: 'Mochila Listrada com Estrelas do Mar',
              alt: 'Mochila Listrada com Estrelas do Mar',
              src: 'https://m.media-amazon.com/images/I/61hF-5A2zWL._AC_SX522_.jpg',
            },
            {
              title: 'Mochila Cross Style',
              alt: 'Mochila Cross Style',
              src: 'https://a-static.mlcdn.com.br/800x560/mochila-cross-style-listras-estampa-juvenil-escolar-casual-clio-style/olistplus/opmj4liem8immpgq/48f382387562fda46123d96e609f3e77.jpeg',
            },
            {
              title: 'Mochila Feminina Escolar',
              alt: 'Mochila Feminina Escolar',
              src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418577036/large/mochila-feminina-escolar-juvenil-estampa-floral-e-listrada_163163.JPG',
            },
          ]
        },
      geometrico: {
        thumbnail: 'https://img.freepik.com/vetores-premium/estampa-geometrica_598830-6.jpg',
        pics: [
          {
            title: 'Mochila Geometrix',
            alt: 'Mochila Geometrix',
            src: 'https://i.zst.com.br/thumbs/12/38/3d/1972508439.jpg',
          },
          {
            title: 'Mochila Bansusu',
            alt: 'Mochila Bansusu',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-bansusu-com-estampa-geometrica-para-meninos-do-ensino-medio/nocnoceua/aub07cjz55z2/ad6cd78e60a031e0a5a0a7c430323f26.jpeg',
          },
          {
            title: 'Mochila Jiayou Girl',
            alt: 'Mochila Jiayou Girl',
            src: 'https://a-static.mlcdn.com.br/800x560/mochila-escolar-jiayou-girl-com-estampa-geometrica-35l-roxa/nocnoceua/aub07gnjpdt5/3c02d0adb9d21127f4361192432be88c.jpeg',
          },
        ],
      }
    },
  },
  {
    id: '3',
    name: 'Bolsa Rosa',
    category: 'bolsas',
    price: 150.0,
    description: 'Bolsa feita para eventos de gala.',
    details: 'Capacidade: 50 litros.<br /> Material: Tecido impermeável.<br /> Conforto: Alças acolchoadas e ajustáveis, interior acolchoado.<br /> Organização: Múltiplos compartimentos internos e externos. Durabilidade: Confeccionada para resistir a condições extremas.',
    medias: {
      mainThumbnail: 'https://constance.vtexassets.com/arquivos/ids/2097666-1600-auto?v=637971288810530000&width=1600&height=auto&aspect=true',
      floral: {
        thumbnail: 'https://cdn.awsli.com.br/2500x2500/2220/2220511/produto/176766434/tecidos-tricoline-tecido-tricoline-digital-flores-ref-9017-cor-304--p-1690983761-viv6bctvh3.png',
        pics: [
          {
            title: 'Mochila Floral Encanto',
            alt: 'Mochila Floral Encanto',
            src: 'https://images.tcdn.com.br/img/img_prod/876307/mochila_farm_xodo_floral_encanto_78315304_caramelo_floral_37269_1_5477ef8af6fdde64f68e50404e083249.jpg',
          },
          {
            title: 'Mochila Floral Colorido',
            alt: '',
            src: 'https://lebiscuit.vtexassets.com/arquivos/ids/3401689/5132782_00000_01.jpg',
          },
          {
            title: 'Mochila Floral e Listrada',
            alt: 'Mochila Floral e Listrada',
            src: 'https://io.convertiez.com.br/m/feiradamadrugada/shop/products/images/418574850/large/mochila-feminina-universitaria-ou-escolar-floral-alto-relevo_156507.JPG',
          },
        ]
      },
    },
  },
]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  // Retorna a lista de produtos com status 200
  res.status(200).json(products)
}
