import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiTableHead: Components["MuiTableHead"] = {
  styleOverrides: {
    root: {
      background: palette.background.paper,
    },
  },
};
