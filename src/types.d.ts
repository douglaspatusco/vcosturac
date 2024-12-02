declare interface Image {
  title: string
  url: string
}

declare type Product = {
  id: number
  category: string
  name: string
  price?: number
  description?: string
  details?: string
  medias?: {
    thumbnail: string
    floral?: Image[]
    listrado?: Image[]
    geometrico?: Image[]
    semEstampa?: Image[]
  }
}
