import { Input, InvoiceCalculator } from '../src'

const inputData: Array<Input> = [
  { price: 2000, vat: 0.055, quantity: 2 },
  { price: 150, vat: 0.2, quantity: 1 },
]

const calculator = new InvoiceCalculator(inputData)

describe('Totals', () => {
  it('should total with VAT correct', () => {
    expect(calculator.totalWithVAT).toBe(4400)
  })

  it('should total without VAT correct', () => {
    expect(calculator.totalWithoutVAT).toBe(4150)
  })

  it('should total VAT correct', () => {
    expect(calculator.totalVAT).toBe(250)
  })
})

describe('Lines', () => {
  it('should return total with VAT for each line', () => {
    expect(calculator.list[0].totalWithVAT).toBe(4220)
    expect(calculator.list[1].totalWithVAT).toBe(180)
  })

  it('should return total without VAT for each line', () => {
    expect(calculator.list[0].totalWithoutVAT).toBe(4000)
    expect(calculator.list[1].totalWithoutVAT).toBe(150)
  })
})
