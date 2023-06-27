import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiList: Components["MuiList"] = {
  styleOverrides: {
    root: {
      userSelect: "none",
      padding: "0 16px",
    },
  },
};
