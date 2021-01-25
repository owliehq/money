export * from './InvoiceCalculator'

/**
 *
 * @param withVat
 * @param vat
 */
export const convertToWithoutVAT = (withVat: number, vat: number, floating = false): number => {
  const beforeFloating = withVat / (1 + vat)

  return !floating ? Math.floor(beforeFloating) : beforeFloating
}
