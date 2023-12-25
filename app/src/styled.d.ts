import 'styled-components/native';
import { ThemeInterface } from './infrastructure/styleComponentTheme';

declare module 'styled-components/native' {
   export interface DefaultTheme extends ThemeInterface {}
}
