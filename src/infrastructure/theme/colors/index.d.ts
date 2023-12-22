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
   primary: string;
   secondary: string;
   disabled: string;
   inverse: string;
   error: strung;
   success: string;
}
export interface Colors {
   brand: Brand;
   ui: Ui;
   bg: Bg;
   text: Text;
}
