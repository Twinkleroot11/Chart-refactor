import { PaletteMode } from "@mui/material";
import "@mui/material/styles";

export const palette = {
  mode: "dark" as PaletteMode | undefined,
  primary: {
    dark: "#200A69",
    main: "#aa52fd",
    light: "#EBD6FD",
  },
  secondary: {
    dark: "#003768",
    main: "#00b8d9",
    light: "#CAFDF5",
  },
  success: {
    dark: "#00b451",
    main: "#00c45c",
    light: "#00d98d",
  },
  error: {
    dark: "#7A0916",
    main: "#B70000",
    light: "#FFE9D5",
  },
  warning: {
    dark: "#7A4100",
    main: "#FFAB00",
    light: "#FFF5CC",
  },
  text: {
    secondary: "red",
  },

  chart: {
    mainColor: "#919EAB4D",
    warning: "#FFAB00",
    primary: "#7635DC",
  },
  tabsColor: {
    all: { disactive: "#FFFFFF80", active: "#FFFFFF" },
    User: { disactive: "#22C55E80", active: "#22C55E" },
    Youtube: { disactive: "#FF563080", active: "#FF5630" },
    Bot: { disactive: "#FFAB0080", active: "#FFAB00" },
    Admin: { disactive: "#aa52fd80", active: "#aa52fd" },
  },
  background: {
    default: "#0E1320",
    paper: "rgb(17, 25, 39)",
    background1: "#233039",
    background2: "#2e3341",
  },
};

declare module "@mui/material/styles" {
  interface Palette {
    chart: {
      mainColor: string;
    };
  }
  interface PaletteOptions {
    chart: {
      mainColor: string;
    };
  }
}
