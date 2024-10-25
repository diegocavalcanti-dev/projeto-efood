class MenuPerfil {
  id: number
  itemTitle: string
  itemImage: string
  itemDescription: string
  itemPhotoAlt: string
  itemServe: string
  itemPrice: number

  // categories: any

  constructor(
    id: number,
    itemTitle: string,
    itemImage: string,
    itemDescription: string,
    itemPhotoAlt: string,
    itemServe: string,
    itemPrice: number
  ) {
    this.itemImage = itemImage
    this.itemTitle = itemTitle
    this.itemDescription = itemDescription
    this.itemPhotoAlt = itemPhotoAlt
    this.id = id
    this.itemServe = itemServe
    this.itemPrice = itemPrice
  }
}

export default MenuPerfil
