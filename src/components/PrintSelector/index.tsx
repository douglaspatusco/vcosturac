import Image from 'next/image'
import { SelectedImage, Prints, PrintsList } from './styles'
import { getPrintImageUrl } from '@/utils/produtoUtils'
import { getFirstLetter } from '@/services/utility'

interface Props {
  selectedPrint: string
  availablePrints: [string, unknown][]
  onSelect: (key: string) => void
}

export const PrintSelector = ({
  selectedPrint,
  availablePrints,
  onSelect,
}: Props) => {
  return (
    <Prints>
      <p>Estampas: </p>
      <PrintsList>
        {availablePrints.map(([key]) => {
          const ImageComponent = key === selectedPrint ? SelectedImage : Image
          return (
            <ImageComponent
              key={key}
              onClick={() => onSelect(key)}
              title={getFirstLetter(key)}
              alt={key}
              src={getPrintImageUrl(key)}
              width={100}
              height={100}
            />
          )
        })}
      </PrintsList>
    </Prints>
  )
}

export default PrintSelector
