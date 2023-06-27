import { Components } from "@mui/material/styles/components";

export const MuiTab: Components["MuiTab"] = {
  styleOverrides: {
    root: {
      fontSize: "14px",
      textTransform: "capitalize",
      fontWeight: 600,
      selected: {
        color: "#ffffff !important",
      },
    },
  },
};
