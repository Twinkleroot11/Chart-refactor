import { ApexOptions } from "apexcharts";

export const options = (color: string) => {
  return {
    fill: {
      type: "gradient",
      gradient: {
        gradientToColors: [color],
        type: "vertical",
        opacityFrom: 0.8,
        opacityTo: 0.2,
        stops: [0, 100],
      },
    },
    chart: {
      type: "area",
      toolbar: {
        show: false,
      },
      zoom: {
        enabled: false,
      },
    },
    tooltip: {
      enabled: false,
    },
    grid: {
      show: false,
    },
    xaxis: {
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      labels: {
        show: false,
      },
    },

    yaxis: {
      show: false,
      labels: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 3,
    },
    colors: [color],
  } as ApexOptions;
};
