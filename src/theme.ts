interface Shades {
  lighter: string;
  light: string;
  DEFAULT: string;
  dark: string;
  darker: string;
}

interface Color {
  [key: string]: Shades | string;
}

export const theme: Color = {
  floralWhite: "#fffaf0",
  gunmetal: "#242c31",
  polishedPine: "#61988E",
  ashGray: "#A0B2A6",
  pineTree: "#253028",
  desertSand: "#eabda8",
  pastelBlue: {
    lighter: "#ced6db",
    light: "#c9d1d7",
    DEFAULT: "#6b8394",
    dark: "#3b4952",
    darker: "#242c31",
  },
  pastelGreen: {
    lighter: "#cfdad2",
    light: "#b0c1b5",
    DEFAULT: "#708f79",
    dark: "#3e4f43",
    darker: "#253028",
  },
  pastelPurple: {
    lighter: "#d7d0d9",
    light: "#bcb1c0",
    DEFAULT: "#86728d",
    dark: "#4b3f4e",
    darker: "#2d262f",
  },
  prussianBlue: {
    lighter: "#cfd4da",
    light: "#afb7c1",
    DEFAULT: "#6f7d90",
    dark: "#3e4650",
    darker: "#252a30",
  },
};
