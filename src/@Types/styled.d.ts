import { defaultTheme } from '../Styles/Theme/default';

type ThemeType = typeof  defaultTheme

declare module 'styled-components' {
    export interface defaultTheme extends ThemeType {}
}