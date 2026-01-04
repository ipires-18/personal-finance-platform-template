export class Money {
  public readonly amount: number
  public readonly currency: string

  private constructor(amount: number, currency: string) {
    this.amount = amount
    this.currency = currency
  }

  static create(props: { amount: number; currency?: string }): Money {
    const currency = props.currency ?? 'BRL'

    if (props.amount < 0) {
      throw new Error('Money amount cannot be negative')
    }

    if (!currency || currency.trim().length === 0) {
      throw new Error('Currency is required')
    }

    // Evita problemas básicos de precisão
    const normalizedAmount = Number(props.amount.toFixed(2))

    return new Money(normalizedAmount, currency)
  }

  add(other: Money): Money {
    this.ensureSameCurrency(other)

    return Money.create({
      amount: this.amount + other.amount,
      currency: this.currency,
    })
  }

  subtract(other: Money): Money {
    this.ensureSameCurrency(other)

    const result = this.amount - other.amount

    if (result < 0) {
      throw new Error('Resulting money cannot be negative')
    }

    return Money.create({
      amount: result,
      currency: this.currency,
    })
  }

  equals(other: Money): boolean {
    return (
      this.amount === other.amount &&
      this.currency === other.currency
    )
  }

  private ensureSameCurrency(other: Money) {
    if (this.currency !== other.currency) {
      throw new Error('Cannot operate with different currencies')
    }
  }
}
