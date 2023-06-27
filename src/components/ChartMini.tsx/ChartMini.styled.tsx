import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const ChartMiniRoot = styled(Box)`
  width: 100%;
  height: 100%;
  min-height: 150px;
  cursor: pointer;
  user-select: none;
`;

type Props = {
  color: string;
};

export const PercentComponent = styled(Box)<Props>`
  display: flex;
  color: ${({ color }) => color};

  svg {
    fill: ${({ color }) => color};
  }
`;

export const DataContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ChartContainer = styled(Box)`
  width: 100%;
`;
