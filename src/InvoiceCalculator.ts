export interface Input {
  price: number
  vat: number
  quantity?: number
  totalWithoutVAT?: number
  totalWithVAT?: number
}

export class InvoiceCalculator {
  /**
   *
   * @param input
   */
  constructor(private input: Input[] = []) {
    //TODO: add validation on input
  }

  /**
   *
   */
  public get totalWithVAT(): number {
    return this.input.reduce((result, item) => {
      const { price, quantity, vat } = item
      result += InvoiceCalculator.getWithVAT(price, vat, quantity)
      return result
    }, 0)
  }

  /**
   *
   */
  public get totalWithoutVAT(): number {
    return this.input.reduce((result, item) => {
      const { price, quantity } = item

      result += InvoiceCalculator.getWithoutVAT(price, quantity)
      return result
    }, 0)
  }

  /**
   *
   */
  public get totalVAT(): number {
    return this.totalWithVAT - this.totalWithoutVAT

    /*this.input.reduce((result, item) => {
      const { price, quantity, vat } = item
      result += InvoiceCalculator.getTotalVAT(price, vat, quantity)
      return result
    }, 0)*/
  }

  /**
   *
   */
  public get list(): Array<any> {
    return this.input.map((item) => {
      const { price, quantity, vat } = item

      item.totalWithoutVAT = InvoiceCalculator.getWithoutVAT(price, quantity)
      item.totalWithVAT = InvoiceCalculator.getWithVAT(price, vat, quantity)

      return item
    })
  }

  /**
   *
   * @param price
   * @param vat
   * @param quantity
   */
  static getWithVAT(price: number, vat: number, quantity = 1): number {
    return Math.ceil(price * (1 + vat) * quantity)
  }

  /**
   *
   * @param price
   * @param quantity
   */
  static getWithoutVAT(price: number, quantity = 1): number {
    return Math.ceil(price * quantity)
  }

  /**
   *
   * @param price
   * @param vat
   * @param quantity
   */
  /*static getTotalVAT(price: number, vat: number, quantity = 1): number {
    return Math.ceil(price * vat * quantity)
  }*/
}
