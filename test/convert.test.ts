import { convertToWithoutVAT } from '../src'

describe('Convert', () => {
  it('should convert withVAT amount to withoutVAT amount', () => {
    const amount = 2000
    const vat = 0.055

    const withoutVAT = convertToWithoutVAT(amount, vat)

    expect(withoutVAT).toBe(1895)
  })
})
