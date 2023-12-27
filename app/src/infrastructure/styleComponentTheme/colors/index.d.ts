export interface Brand {
   primary: string;
   secondary: string;
   muted: string;
}
export interface Ui {
   primary: string;
   secondary: string;
   tertiary: string;
   quaternary: string;
   disabled: string;
   error: string;
   success: string;
}
export interface Bg {
   primary: string;
   secondary: string;
}
export interface Text {
   primaryLight: string;
   primaryDark: string;

   secondaryLight: string;
   secondaryDark: string;

   disabledLight: string;
   disabledDark: string;

   inverseLight: string;
   inverseDark: string;

   errorLight: string;
   errorDark: string;

   successLight: string;
   successDark: string;

   gray: string;
}
export interface Colors {
   brand: Brand;
   ui: Ui;
   bg: Bg;
   text: Text;
}
