
const priceFormat = new Intl.NumberFormat(undefined, {
    currency: 'USD',
    style: 'currency'
})

const CurrencyFormat = (number:number) => {
  return priceFormat.format(number)    
}

export default CurrencyFormat
