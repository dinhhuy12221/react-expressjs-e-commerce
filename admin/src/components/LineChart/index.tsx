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
          data: data.map((item) => item.price),
        },
      ]}
      height={300}
    />
  );
};

export default BasicArea;
