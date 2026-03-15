import { LineChart } from "@mui/x-charts/LineChart";
import "./index.css";
const BasicArea = ({ data }) => {
  return (
    <LineChart
      xAxis={[
        {
          data: data.map((item) => item.date),
          scaleType: "point",
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
          type: "line",
          data: data.map((item) => item.price),
          valueFormatter: (value) => `$${value}`,
          label: "Revenue",
        },
      ]}
      height={300}
    />
  );
};

export default BasicArea;
