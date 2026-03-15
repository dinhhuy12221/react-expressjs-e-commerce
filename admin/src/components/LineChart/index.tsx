import { LineChart } from "@mui/x-charts/LineChart";
import "./index.css";
const BasicArea = ({ data }) => {
  const dates = [
    new Date("2025-01-01"),
    new Date("2025-01-02"),
    new Date("2025-01-03"),
  ];
  return (
    <LineChart
      xAxis={[
        {
          data: data.map(d => new Date(d.date)),
          scaleType: "time",
          valueFormatter: (value) =>
            `${value.getDate()}-${value.getMonth()+1}-${value.getFullYear()}`
        },
      ]}
      series={[
        {
          data: data.map(d => d.price),
        },
      ]}
      height={300}
    />
  );
};

export default BasicArea;
