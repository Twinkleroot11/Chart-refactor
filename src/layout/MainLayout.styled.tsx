import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { palette } from "../theme/palette";

export const MainLayoutRoot = styled(Box)`
  width: 100vw;
  height: 100vh;
  background-color: ${palette.background.default};
  position: relative;
  padding-top: 60px;
`;
