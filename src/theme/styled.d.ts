import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      light: {
        primary: string
        secondary: string
      }
      dark: {
        primary: string
        secondary: string
      }
      red: string
      green: string
    }
    padding: {
      sm: string
      md: string
      lg: string
    }
    width: {
      sm: string
      md: string
      lg: string
    }
  }
}
