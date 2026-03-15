import { LineChart } from '@mui/x-charts/LineChart';
import "./index.css"
const BasicArea = () => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: [2, 5.5, 2, 8.5, 1.5, 5],
        //   area: true,
        },
      ]}
      height={300}
    />
  );
}

export default BasicArea