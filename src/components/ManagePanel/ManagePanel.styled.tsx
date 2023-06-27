import { Box } from "@mui/material";
import { styled } from "@mui/system";

export const AdvancedChartRoot = styled(Box)`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const ManagePanel = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;

  & > * {
    padding: 0 20px;
  }
`;

export const ChartContainer = styled(Box)``;

export const DatePicker = styled(Box)``;
