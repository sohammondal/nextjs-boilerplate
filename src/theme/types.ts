export interface Colors {
  Gray: string
  Black: string
}

export enum Themes {
  LIGHT = 'light',
  DARK = 'dark',
}

export interface ITheme {
  colors: Colors
  themes: Themes.DARK | Themes.LIGHT
}
