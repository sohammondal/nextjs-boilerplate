import 'styled-components'

import { ITheme } from './types'

declare module 'styled-components' {
  type Theme = typeof ITheme
  export interface DefaultTheme extends Theme {}
}
