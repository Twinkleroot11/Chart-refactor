import { Components } from "@mui/material/styles/components";
import { palette } from "../palette";

export const MuiLinearProgress: Components["MuiLinearProgress"] = {
  styleOverrides: {
    root: {
      background: palette.background.default,
      borderRadius: "10px",
      height: "10px",
    },
    bar: {
      borderRadius: "10px",
    },
  },
};
