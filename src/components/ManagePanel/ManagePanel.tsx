import { Box, Paper, Typography } from "@mui/material";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { DatePicker, ManagePanel } from "./ManagePanel.styled";
import { FC } from "react";
type Props = {
  fullName: string;
};

const Chart: FC<Props> = ({ fullName }) => {
  return (
    <ManagePanel py={1} component={Paper}>
      <Box>
        <Typography fontWeight={600} fontSize={20}>
          {fullName}
        </Typography>
      </Box>
      <DatePicker>
        <ButtonGroup />
      </DatePicker>
    </ManagePanel>
  );
};

export default Chart;
