export class Category {
  public readonly id: string
  public readonly name: string
  public readonly icon: string
  public readonly userId: string

  constructor(props: {
    id: string
    name: string
    icon: string
    userId: string
  }) {
    this.validate(props)

    this.id = props.id
    this.name = props.name
    this.icon = props.icon
    this.userId = props.userId
  }

  private validate(props: {
    id: string
    name: string
    icon: string
    userId: string
  }) {
    if (!props.id) {
      throw new Error('Category id is required')
    }

    if (!props.userId) {
      throw new Error('Category must be associated with a user')
    }

    if (!props.name || props.name.trim().length < 2) {
      throw new Error('Category name must have at least 2 characters')
    }

    if (!props.icon || props.icon.trim().length === 0) {
      throw new Error('Category icon is required')
    }
  }
}
