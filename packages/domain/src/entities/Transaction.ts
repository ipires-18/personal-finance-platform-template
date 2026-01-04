import { Money } from '../value-objects/Money'

export enum TransactionType {
  INCOME = 'INCOME',
  EXPENSE = 'EXPENSE',
}

export class Transaction {
  public readonly id: string
  public readonly description: string
  public readonly amount: Money
  public readonly type: TransactionType
  public readonly occurredAt: Date
  public readonly userId: string
  public readonly accountId: string
  public readonly categoryId: string

  constructor(props: {
    id: string
    description: string
    amount: Money
    type: TransactionType
    occurredAt: Date
    userId: string
    accountId: string
    categoryId: string
  }) {
    this.validate(props)

    this.id = props.id
    this.description = props.description
    this.amount = props.amount
    this.type = props.type
    this.occurredAt = props.occurredAt
    this.userId = props.userId
    this.accountId = props.accountId
    this.categoryId = props.categoryId
  }

  private validate(props: {
    id: string
    description: string
    amount: Money
    type: TransactionType
    occurredAt: Date
    userId: string
    accountId: string
    categoryId: string
  }) {
    if (!props.id) {
      throw new Error('Transaction id is required')
    }
  
    if (!props.amount) {
      throw new Error('Transaction amount is required')
    }
  
    if (!props.userId) {
      throw new Error('Transaction must be associated with a user')
    }
  
    if (!props.accountId) {
      throw new Error('Transaction must be associated with an account')
    }
  
    if (!props.categoryId) {
      throw new Error('Transaction must be associated with a category')
    }
  
    if (!props.description || props.description.trim().length < 2) {
      throw new Error('Transaction description must have at least 2 characters')
    }
  
    if (!Object.values(TransactionType).includes(props.type)) {
      throw new Error('Invalid transaction type')
    }
  
    if (!(props.occurredAt instanceof Date)) {
      throw new Error('Transaction date is invalid')
    }
  
    if (props.occurredAt > new Date()) {
      throw new Error('Transaction date cannot be in the future')
    }
  }

  isIncome(): boolean {
    return this.type === TransactionType.INCOME
  }

  isExpense(): boolean {
    return this.type === TransactionType.EXPENSE
  }
}
