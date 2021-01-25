import { convertToWithoutVAT, InvoiceCalculator } from '../src'

function getRandomCentims() {
  return Math.floor(Math.random() * 65565) + 1
}

describe('Convert', () => {
  it('should convert withVAT amount to withoutVAT amount', () => {
    const amount = 2000
    const vat = 0.055

    const withoutVAT = convertToWithoutVAT(amount, vat)

    expect(withoutVAT).toBe(1895)
  })

  it('should convert withVAT amounts to withoutVAT amounts then reconvert it and find same values', () => {
    const randomValues = Array(40000)
      .fill(0)
      .map((value, index) => index + 20)

    const amounts = [250, 750, 550, 799, 1054, 689, 100, 101, 105, ...randomValues]
    const vat = 0.055

    const withoutVATs = amounts.map((amount) => convertToWithoutVAT(amount, vat, true))

    const withVATs = withoutVATs.map((amount) => InvoiceCalculator.getWithVAT(amount, vat))

    amounts.forEach((amount, index) => {
      expect(amount).toBe(withVATs[index])
    })
  })
})
