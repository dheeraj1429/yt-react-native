import { Colors } from './colors';
import { colors } from './colors/colors';
import { Sizes } from './sizes';
import { height } from './sizes/height';
import { spacing } from './sizes/spacing';
import { width } from './sizes/width';
import { fontSize } from './sizes/fontSize';

export interface ThemeInterface {
   colors: Colors;
   sizes: Sizes;
}

export const theme: ThemeInterface = {
   colors,
   sizes: {
      fontSize,
      height,
      spacing,
      width,
   },
};
