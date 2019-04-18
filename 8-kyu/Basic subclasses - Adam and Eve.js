class Human {}
class Man extends Human {}
class Woman extends Human {}

class God {
  static create() {
    const adan = new Man()
    const eva = new Woman()

    return [adan, eva]
  }
}
