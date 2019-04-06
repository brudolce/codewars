class Animal {
  constructor(name, type) {
    this.name = name
    this.type = type
  }

  toString() {
    const { name, type } = this
    return `${name} is a ${type}`
  }
}
