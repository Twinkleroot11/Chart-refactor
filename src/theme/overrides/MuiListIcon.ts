import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiListItemIcon: Components["MuiListItemIcon"] = {
  styleOverrides: {
    root: {
      minWidth: "48px",

      svg: {
        // fill: palette.text.primary,
        height: "24px",
        width: "24px",
      },
    },
  },
};
