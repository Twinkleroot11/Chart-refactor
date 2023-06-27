import { Box, Paper, Typography } from "@mui/material";
import {
  ChartContainer,
  ChartMiniRoot,
  DataContainer,
  PercentComponent,
} from "./ChartMini.styled";
import Chart from "react-apexcharts";
import { palette } from "../../theme/palette";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import { ChartStates } from "../../page/Main/Main";
import { FC } from "react";

import { useNavigate } from "react-router-dom";
import { options } from "./chartOptions";
import { MockedData } from "../../types";

type Props = {
  state: ChartStates;
  data: MockedData;
  changeProcent: number;
  currentPrice: number;
  fullName: string;
  shortName: string;
};

const ChartMini: FC<Props> = ({
  state,
  data,
  changeProcent,
  currentPrice,
  fullName,
  shortName,
}) => {
  const color =
    state === ChartStates.UP ? palette.success.main : palette.error.main;
  const router = useNavigate();

  const getTargetItemHandler = (name: string) => {
    router(`/chart/${name}`);
  };

  const chartData = Object.values(data)[0]
    ?.map((item) => {
      return { x: item.DATE, y: item.PRICE || 0 };
    })
    .slice(1000);

  return (
    <ChartMiniRoot
      component={Paper}
      onClick={() => getTargetItemHandler(shortName)}
    >
      <DataContainer px={2} pt={2}>
        <Box>
          <Typography fontSize={22} fontWeight={600} align="left">
            {fullName}
          </Typography>
          <Typography
            align="left"
            fontSize="18px"
            sx={{ color: "rgb(160, 174, 192) " }}
          >
            {(currentPrice / 100).toFixed(2)}$
          </Typography>
        </Box>
        <PercentComponent color={color}>
          {changeProcent > 0 ? (
            <KeyboardArrowUpIcon />
          ) : (
            <KeyboardArrowDownIcon />
          )}
          <Typography>{changeProcent}%</Typography>
        </PercentComponent>
      </DataContainer>
      <ChartContainer>
        <Chart
          type="line"
          width={"100%"}
          height={"90%"}
          series={[
            {
              name: "Withdraws",
              type: "area",
              data: [...(chartData || [])],
            },
          ]}
          options={options(color)}
        />
      </ChartContainer>
    </ChartMiniRoot>
  );
};

export default ChartMini;
