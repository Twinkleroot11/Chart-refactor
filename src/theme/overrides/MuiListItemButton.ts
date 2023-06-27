import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";
export const MuiListItemButton: Components["MuiListItemButton"] = {
  styleOverrides: {
    root: {
      userSelect: "none",
      padding: "8px 16px",
      borderRadius: "8px",
      marginBottom: "4px",
      "&.Mui-selected": {
        svg: {
          fill: palette.primary.main,
        },
        color: palette.primary.main,
      },
    },
  },
};
