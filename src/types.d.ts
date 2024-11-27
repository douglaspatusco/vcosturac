<<<<<<< Updated upstream
declare Product = {
  id: number,
  thumb: string,
  name: string,
  description: string
=======
declare interface Image {
  title: string
  url: string
}

declare type Product = {
  id: number
  name: string
  price: number
  description: string
  details: string
  medias: {
    thumbnail: string
    floral?: Image[]
    listrado?: Image[]
    geometrico?: Image[]
    semEstampa?: Image[]
  }
>>>>>>> Stashed changes
}
