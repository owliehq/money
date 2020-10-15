export * from './InvoiceCalculator'

/**
 *
 * @param withVat
 * @param vat
 */
export const convertToWithoutVAT = (withVat: number, vat: number): number => {
  return Math.floor(withVat / (1 + vat))
}
