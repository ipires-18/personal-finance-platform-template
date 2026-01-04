export enum AccountType {
  CHECKING = 'CHECKING',
  INVESTMENT = 'INVESTMENT',
  CASH = 'CASH',
}

export class Account {
  public readonly id: string
  public readonly name: string
  public readonly initialBalance: number
  public readonly type: AccountType
  public readonly color: string
  public readonly userId: string

  constructor(props: {
    id: string
    name: string
    initialBalance: number
    type: AccountType
    color: string
    userId: string
  }) {
    this.validate(props)

    this.id = props.id
    this.name = props.name
    this.initialBalance = props.initialBalance
    this.type = props.type
    this.color = props.color
    this.userId = props.userId
  }

  private validate(props: {
    id: string
    name: string
    initialBalance: number
    type: AccountType
    color: string
    userId: string
  }) {
    if (!props.id) {
      throw new Error('Account id is required')
    }

    if (!props.userId) {
      throw new Error('Account must be associated with a user')
    }

    if (!props.name || props.name.trim().length < 2) {
      throw new Error('Account name must have at least 2 characters')
    }

    if (props.initialBalance < 0) {
      throw new Error('Initial balance cannot be negative')
    }

    if (!Object.values(AccountType).includes(props.type)) {
      throw new Error('Invalid account type')
    }

    if (!props.color) {
      throw new Error('Account color is required')
    }
  }
}
