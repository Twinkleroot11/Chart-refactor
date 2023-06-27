import { Grid } from "@mui/material";
import ManagePanel from "../../components/ManagePanel";
import { ChartContainer, PageRoot } from "./DetailedInformation.styled";
import Chart from "react-apexcharts";
import { getConfig } from "./chartOptions";
import { useParams } from "react-router-dom";
import { mockData } from "../../mock";
import { updatable_data } from "../../updatable_data";
import { mapConfig } from "../Main/mapDataConfig";
import { palette } from "../../theme/palette";

const InformationChart = () => {
  const { name } = useParams();

  const dataIndex = mockData.data.findIndex(
    (item) => Object.keys(item)[0] === name
  );

  const actualKey = mapConfig[name as keyof typeof mapConfig];

  const lastData = updatable_data.data.find((key) => actualKey === key.TICKER);

  let testData = Object.entries(mockData.data[dataIndex])[0][1].map(
    (c: any) => {
      return { x: c.DATE, y: c.PRICE || 0 };
    }
  );

  return (
    <PageRoot>
      <Grid xs={12}>
        <ManagePanel fullName={lastData?.TIC_FULLNAME || ""} />
      </Grid>
      <Grid xs={12} mt={3}>
        <ChartContainer>
          <Chart
            type="line"
            width={"100%"}
            height={"100%"}
            series={[
              {
                name: "Withdraws",
                type: "area",
                data: testData,
              },
            ]}
            options={getConfig(
              (lastData?.CHANGE_PERCENT || 0) > 0
                ? palette.success.main
                : palette.error.main,
              (lastData?.CHANGE_PERCENT || 0) > 0
            )}
          />
        </ChartContainer>
      </Grid>
    </PageRoot>
  );
};

export default InformationChart;
