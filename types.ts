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
    list: IPlate[]
  }
  Settings: undefined
  Plate: {
    plate: IPlate
    list: IPlate[]
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