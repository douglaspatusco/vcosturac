import { StaticImport } from 'next/dist/shared/lib/get-img-props'

declare interface PrintsImages {
  alt: string
  src: string | StaticImport
}

declare interface PrintsProducts {
  floral?: PrintsImages[] | null
  listrado?: PrintsImages[] | null
  geometrico?: PrintsImages[] | null
  semEstampa?: PrintsImages[] | null
}

declare type Product = {
  selectedPrint: any
  id: string
  slug: string
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
