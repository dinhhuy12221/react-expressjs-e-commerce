import { LineChart } from '@mui/x-charts/LineChart';
import "./index.css"
const BasicArea = ({ prices }) => {
  return (
    <LineChart
      xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
      series={[
        {
          data: prices,
        //   area: true,
        },
      ]}
      height={300}
    />
  );
}

export default BasicArea