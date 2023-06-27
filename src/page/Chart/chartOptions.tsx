import { ApexOptions } from "apexcharts";
import { palette } from "../../theme/palette";
import moment from "moment";

export const getConfig = (color: string, progressState: boolean) => {
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
    grid: {
      show: true,
      borderColor: "grey",
      position: "back",

      xaxis: {
        show: false,
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
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
      marker: {
        show: true,
      },
      custom: function (props) {
        const { series, seriesIndex, dataPointIndex, w } = props;

        return (
          `<div class="custom_tooltip">` +
          "<div class='custom__tooltip-block'>" +
          moment(w.globals.categoryLabels[dataPointIndex]).format(
            "MMMM d, YYYY"
          ) +
          "</div>" +
          "<div class='custom__tooltip-block'>" +
          `<div class="${
            progressState ? "progress" : "regress"
          } custom__tooltip-marker"></div>` +
          "Price: " +
          series[seriesIndex][dataPointIndex] +
          "</div>" +
          "</div>"
        );
      },
    },
    xaxis: {
      tickAmount: 10,
      axisTicks: {
        show: false,
      },
      labels: {
        rotate: 0,
      },
      axisBorder: {
        show: false,
      },
      tooltip: {
        enabled: false,
      },
    },
    yaxis: {
      tooltip: {
        enabled: false,
      },
    },
    stroke: {
      width: 4,
    },
    colors: [color],
  } as ApexOptions;
};
