class Menu {
  title: string
  rate: number
  categories: string[]
  description: string
  image: string
  id: number

  constructor(
    title: string,
    rate: number,
    categories: string[],
    description: string,
    image: string,
    id: number
  ) {
    this.title = title
    this.rate = rate
    this.categories = categories
    this.description = description
    this.image = image
    this.id = id
  }
}

export default Menu
