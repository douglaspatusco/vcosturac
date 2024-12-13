import { StaticImport } from "next/dist/shared/lib/get-img-props"

declare interface PrintsImages {
  alt: string
  src: string
}

declare interface PrintsProducts {
  floral?: PrintsImages[] | null
  listrado?: PrintsImages[] | null
  geometrico?: PrintsImages[] | null
  semEstampa?: PrintsImages[] | null
}

declare type Product = {
  id: string
  category: string
  name: string
  price?: number
  division: string
  installment: number
  description?: string
  details?: string
  medias?: {
    thumbnail: string | StaticImport
    prints: PrintsProducts
  }
}
