import { useState } from "react";
import './index.css'

function Filter() {
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
        return (indexes.includes(index) ? 'btn--primary' : 'btn--outlined');
    }


  return (
    <section className="review-filter">
      <span>Filtered by: </span>
      <button className={`btn btn--rounded ${addFilter(0)}`}
        onClick={() => handleFilter(0)}>Updated</button>
      <button className={`btn btn--rounded ${addFilter(1)}`}
        onClick={() => handleFilter(1)}>5 stars</button>
      <button className={`btn btn--rounded ${addFilter(2)}`}
        onClick={() => handleFilter(2)}>4 stars</button>
      <button className={`btn btn--rounded ${addFilter(3)}`}
        onClick={() => handleFilter(3)}>3 stars</button>
      <button className={`btn btn--rounded ${addFilter(4)}`}
        onClick={() => handleFilter(4)}>2 stars</button>
      <button className={`btn btn--rounded ${addFilter(5)}`}
        onClick={() => handleFilter(5)}>1 stars</button>
    </section>
  );
}

export default Filter;
