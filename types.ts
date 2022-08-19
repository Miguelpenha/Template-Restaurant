export interface Itheme {
  color: string
  primary: string
  name: IthemeType
  secondary: string
  secondaryColor: string
  backgroundColor: string
  backgroundColorSecondary: string
}

export enum ThemeNameType {
  dark = 'dark',
  light = 'light'
}

export type IthemeType = keyof typeof ThemeNameType

export type Inavigation = {
  Home: undefined
  Settings: undefined
  Plate: {
    plate: IPlate 
  }
  List: {
    transitionModal?: boolean
  }
  Photo: {
    plate: IPlate
  }
  Confirmation: {
    transitionModal?: boolean
  }
  Location: {
    initial?: boolean
  }
  LocationInitial: {
    initial?: boolean
  }
  Login: undefined
}

export interface IPlate {
  _id: string
  name: string
  price: number
  photo: {
      name: string
      key: string
      size: number
      mimeType: string
      url: string
      width: number
      height: number
  }
  weight: number
  description: string
  peoplesCount: number
  priceConverted: string
  created: {
    date: String
    hour: String
    system: Date
  }
}

export interface IItemList extends IPlate {
  note: string
  onList?: boolean
  quantity: number
  totalPrice: number
  totalPriceConverted: string
}

export interface IRequest {
  balance: number
  list: IItemList[]
  withdrawal: boolean
}

export interface ILocation {
  city: string // Cidade
  neighborhood: string // Bairro
  street: string // Rua
  complement: string // Complemento do endereço
  number: string // Número da casa
}