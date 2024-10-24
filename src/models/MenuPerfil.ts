class MenuPerfil {
  image: string
  title: string
  description: string
  id: number
  alt: string

  // categories: any

  constructor(
    image: string,
    title: string,
    description: string,
    id: number,
    alt: string
  ) {
    this.image = image
    this.title = title
    this.description = description
    this.id = id
    this.alt = alt
  }
}

export default MenuPerfil
