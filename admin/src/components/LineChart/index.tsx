import { LineChart } from "@mui/x-charts/LineChart";
import "./index.css";
import {
  BarPlot,
  ChartContainer,
  ChartsXAxis,
  ChartsYAxis,
  LinePlot,
} from "@mui/x-charts";
const BasicArea = ({ data }) => {
  return (
    <ChartContainer
      xAxis={[
        {
          data: data.map((item) => item.date),
          scaleType: "band",
          //   valueFormatter: (value) =>
          //     `${value.getDate()}-${value.getMonth()+1}-${value.getFullYear()}`
        },
      ]}
      yAxis={[
        {
          valueFormatter: (value) => `$${value}`,
        },
      ]}
      series={[
        {
          type: "bar",
          data: data.map((item) => item.orders),
          label: "Orders",
        },
        {
          type: "line",
          data: data.map((item) => item.revenue),
          label: "Revenue",
        },
      ]}
      height={300}
    >
      <BarPlot />
      <LinePlot />
      <ChartsXAxis />
      <ChartsYAxis />
    </ChartContainer>
  );
};

export default BasicArea;
