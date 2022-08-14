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
  Home: {
    balance: number
  }
  Settings: undefined
  Plate: {
    plate: IPlate
    balance: number
  }
}

export interface IPlate {
  _id: string
  name: string
  price: number
  image: string
  weight: number
  description: string
  peoplesCount: number
  priceConverted: string
}