declare interface PrintsImages {
  title: string
  alt: string
  src: string
}

declare type Product = {
  id: string
  category: string
  name: string
  price?: number
  description?: string
  details?: string
  medias?: {
    mainThumbnail: string
    floral?: {
      thumbnail: string
      pics: PrintsImages[] | undefined
    }
    listrado?: {
      thumbnail: string
      pics: PrintsImages[] | undefined
    }
    geometrico?: {
      thumbnail: string
      pics: PrintsImages[] | undefined
    }
    semEstampa?: {
      thumbnail: string
      pics: PrintsImages[] | undefined
    }
  }
}
