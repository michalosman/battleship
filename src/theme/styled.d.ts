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
    }
  }
}
