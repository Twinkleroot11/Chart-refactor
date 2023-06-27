import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiDrawer: Components["MuiDrawer"] = {
  styleOverrides: {
    paper: {
      background: palette.background.default,
      width: "280px",
    },
  },
};
