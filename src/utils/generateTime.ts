import { setTimeOrder, setTimeStamp } from '@/store/reducers/timeSlice'
import { generateReport } from '@/store/thunks/reportThunk'
import type { AppDispatch } from '@/store'

export const generateTime = (dispatch: AppDispatch) => {
  const timeOrder = new Date().toLocaleString()
  const timeOnlyNumbers = timeOrder.replace(/[^0-9]/g, '')
  const timeStamp = timeOnlyNumbers.slice(0, 14)

  dispatch(setTimeOrder(timeOrder)) // Salva o timestamp no Redux
  dispatch(setTimeStamp(timeStamp)) // Salva no Redux
  dispatch(generateReport()) // Gera o relatório
}
