export enum EModes {
  Light = 'light',
  Dark = 'dark'
}

export interface IThemeContextProperties {
  themeMode: EModes
  updateThemeMode: (mode: EModes) => void
}
