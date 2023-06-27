import { ThemeOptions, createTheme } from "@mui/material/styles";
import { palette } from "./palette";
import { MuiDrawer } from "./overrides/MuiDrawer";
import { MuiList } from "./overrides/MuiList";
import { MuiListItemButton } from "./overrides/MuiListItemButton";
import { MuiListItemIcon } from "./overrides/MuiListIcon";
import { MuiListSubheader } from "./overrides/MuiListSubHeader";
import { MuiPaper } from "./overrides/MuiPaper";
import { MuiTableHead } from "./overrides/MuiTableHead";
import { MuiTableCell } from "./overrides/MuiTableCell";
import { MuiTable } from "./overrides/MuiTable";
import { MuiLinearProgress } from "./overrides/MuiLinearProgress";
import { MuiTableSortLabel } from "./overrides/MuiTableSortLabel";
import { MuiTab } from "./overrides/MuiTab";

const themeVariables: ThemeOptions = {
  palette,
  components: {
    MuiDrawer,
    MuiList,
    MuiListItemButton,
    MuiListItemIcon,
    MuiListSubheader,
    MuiPaper,
    MuiTableHead,
    MuiTab,
    MuiTableCell,
    MuiTable,
    MuiLinearProgress,
    MuiTableSortLabel,
  },
};

const theme = createTheme(themeVariables);

export default theme;
