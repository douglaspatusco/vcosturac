declare interface Image {
  title: string
  url: string
}

declare type Product = {
  id: string
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
