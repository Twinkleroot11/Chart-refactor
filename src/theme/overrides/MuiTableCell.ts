import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";
export const MuiTableCell: Components["MuiTableCell"] = {
  styleOverrides: {
    root: {
      background: palette.background.paper,
    },
    head: {
      backgroundColor: palette.background.background1,
    },
  },
};
