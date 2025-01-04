export const getFirstLetter = (word?: string): string => {
  if (!word || typeof word !== 'string') {
    return '' // Retorna uma string vazia se a entrada for inválida
  }
  return word.charAt(0).toUpperCase() + word.slice(1)
}

export const formattedPrice = (price: number): string => {
  if (isNaN(price)) {
    return 'R$ 0,00'
  }
  return `R$ ${price.toLocaleString('pt-BR', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })}`
}
