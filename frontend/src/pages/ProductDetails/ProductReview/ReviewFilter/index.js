import { Button } from "@mui/material";
import './index.css'
import { useState } from "react";

function ReviewFilter() {
    const [indexes, setIndexes] = useState([]);

    const handleFilter = (index) => {
        if (indexes.includes(index)) {
            let indexes_temp = indexes.filter(i => i !== index)
            setIndexes(indexes_temp);
        } else {
            setIndexes([...indexes, index]);
        }
    }

    const addFilter = (index) => {
        return (indexes.includes(index) ? 'btn-red' : 'btn-outlined');
    }


  return (
    <div className="filter">
      <span>Filterd by: </span>
      <Button className={`btn-round ${addFilter("0")}`} 
        onClick={() => handleFilter("0")}>Updated</Button>
      <Button className={`btn-round ${addFilter("1")}`} 
        onClick={() => handleFilter("1")}>5 stars</Button>
      <Button className={`btn-round ${addFilter("2")}`} 
        onClick={() => handleFilter("2")}>4 stars</Button>
      <Button className={`btn-round ${addFilter("3")}`} 
        onClick={() => handleFilter("3")}>3 stars</Button>
      <Button className={`btn-round ${addFilter("4")}`} 
        onClick={() => handleFilter("4")}>2 stars</Button>
      <Button className={`btn-round ${addFilter("5")}`} 
        onClick={() => handleFilter("5")}>1 stars</Button>
    </div>
  );
}

export default ReviewFilter;
