import 'styled-components/native';
import { ThemeInterface } from './infrastructure/theme';

declare module 'styled-components/native' {
   export interface DefaultTheme extends ThemeInterface {}
}
