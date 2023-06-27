import { Box } from "@mui/material";
import { styled } from "@mui/system";
import { palette } from "../../theme/palette";

export const ButtonGroupRoot = styled(Box)`
  color: white;
  display: flex;
`;

export const PickerItem = styled(Box)<{ selected: boolean }>`
  cursor: pointer;
  padding: 8px;
  transition: 0.2s;
  border-radius: 10px;

  ${({ selected }) => selected && `background: ${palette.background.default};`}

  &:hover {
    background: ${palette.background.background1};
  }
`;
