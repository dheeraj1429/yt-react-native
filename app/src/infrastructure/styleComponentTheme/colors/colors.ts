import { Colors } from '.';

export const colors: Colors = {
   brand: {
      primary: '#E50914', // Netflix Red
      secondary: '#000000', // Black
      muted: '#FFFFFF', // White
   },
   ui: {
      primary: '#141414', // Dark Gray
      secondary: '#808080', // Medium Gray
      tertiary: '#F1F1F1', // Light Gray
      quaternary: '#FFFFFF', // White
      disabled: '#C0C0C0', // Light Gray (disabled)
      error: '#E50914', // Netflix Red (error)
      success: '#138000', // Green (success)
   },
   bg: {
      primary: '#141414', // Dark Gray
      secondary: '#F1F1F1', // Light Gray
   },
   text: {
      primaryLight: '#F5F5F5', // Lighter shade of White
      primaryDark: '#CCCCCC', // Darker shade of White

      secondaryLight: '#A0A0A0', // Lighter shade of Medium Gray
      secondaryDark: '#606060', // Darker shade of Medium Gray

      disabledLight: '#E0E0E0', // Lighter shade of Light Gray (disabled)
      disabledDark: '#A9A9A9', // Darker shade of Light Gray (disabled)

      inverseLight: '#2D2D2D', // Lighter shade of Dark Gray (text on white)
      inverseDark: '#0A0A0A', // Darker shade of Dark Gray (text on white)

      errorLight: '#FF696E', // Lighter shade of Netflix Red (error)
      errorDark: '#B40009', // Darker shade of Netflix Red (error)

      successLight: '#49E08B', // Lighter shade of Green (success)
      successDark: '#007B39', // Darker shade of Green (success)

      gray: '#212020',
   },
};
