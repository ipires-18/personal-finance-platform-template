export class User {
  public readonly id: string
  public readonly name: string
  public readonly email: string
  private readonly password: string

  constructor(props: {
    id: string
    name: string
    email: string
    password: string
  }) {
    this.validate(props)

    this.id = props.id
    this.name = props.name
    this.email = props.email
    this.password = props.password
  }

  private validate(props: {
    id: string
    name: string
    email: string
    password: string
  }) {
    if (!props.id) {
      throw new Error('User id is required')
    }

    if (!props.name || props.name.trim().length < 2) {
      throw new Error('User name must have at least 2 characters')
    }

    if (!props.email || !props.email.includes('@')) {
      throw new Error('User email is invalid')
    }

    if (!props.password || props.password.length < 6) {
      throw new Error('User password must have at least 6 characters')
    }
  }
}
