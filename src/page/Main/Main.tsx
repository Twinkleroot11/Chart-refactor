import { Grid } from "@mui/material";
import { MainPageRoot } from "./Main.styled";
import ChartMini from "../../components/ChartMini.tsx";
import { mockData } from "../../mock";
import { updatable_data } from "../../updatable_data";
import { mapConfig } from "./mapDataConfig";

export enum ChartStates {
  UP = "UP",
  DOWN = "DOWN",
}

const Main = () => {
  return (
    <MainPageRoot container alignContent={"flex-start"}>
      {mockData.data.map((item, ind) => {
        const keyOfActualData =
          mapConfig[Object.keys(item)[0] as keyof typeof mapConfig];

        const lastData = updatable_data.data.find(
          (c) => c.TICKER === keyOfActualData
        );

        return (
          <Grid pl={!(ind % 4) ? 0 : 2} pb={2} item xs={3}>
            <ChartMini
              shortName={Object.keys(item)[0] || ""}
              currentPrice={lastData?.PRICE_NOW || 0}
              fullName={lastData?.TIC_FULLNAME || ""}
              data={item}
              key={ind}
              state={
                (lastData?.CHANGE_PERCENT || 0) > 0
                  ? ChartStates.UP
                  : ChartStates.DOWN
              }
              changeProcent={lastData?.CHANGE_PERCENT || 0}
            />
          </Grid>
        );
      })}
    </MainPageRoot>
  );
};

export default Main;
