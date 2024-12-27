import { StaticImport } from 'next/dist/shared/lib/get-img-props'

interface PrintsImages {
  alt: string
  src: string | StaticImport
}

interface PrintsProducts {
  floral?: PrintsImages[] | null
  listrado?: PrintsImages[] | null
  geometrico?: PrintsImages[] | null
  semEstampa?: PrintsImages[] | null
}

interface Product {
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
