import { Colors } from './colors';
import { colors } from './colors/colors';
import { Sizes } from './sizes';
import { spacing } from './sizes/spacing';
import { widthAndHeight } from './sizes/widthAndHeight';
import { fontSize } from './sizes/fontSize';

export interface ThemeInterface {
   colors: Colors;
   sizes: Sizes;
}

export const theme: ThemeInterface = {
   colors,
   sizes: {
      fontSize,
      spacing,
      widthAndHeight,
   },
};
