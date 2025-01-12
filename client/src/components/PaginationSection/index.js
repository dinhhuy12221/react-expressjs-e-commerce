import Pagination from '@mui/material/Pagination';
import './index.css'

function PaginationSection() {
  return (
    <div className="page">
      <Pagination count={10} variant="outlined" />
    </div>
  );
}

export default PaginationSection;
