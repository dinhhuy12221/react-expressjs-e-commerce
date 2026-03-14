import React, { useEffect, useState } from 'react'
import { IoPencil } from 'react-icons/io5';
import { MdDeleteForever } from 'react-icons/md';
import { getBrands } from '../../api/brand';
import Breadcrumb from '../../components/Breadcrumb';

const Brand = () => {
  const [categories, setCategories] = useState<any>(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setCategory({
  //     name: e.target.name.value,
  //     imgUrl: e.target.imgUrl.value,
  //     color: e.target.color.value,
  //   });

  //   alert(JSON.stringify(category));
  // };

  useEffect(() => {
    const asyncHandle = async () => {
      const result = await getBrands();
      setCategories(result.data);
    };
    asyncHandle();
  }, []);

  return (
    <div className="category">
      <Breadcrumb
        path={[
          { name: "Dashboard", to: "/dashboard" },
          { name: "Categories", to: "/categories" },
        ]}
      />
      <form
        className="category-form"
        // onSubmit={handleSubmit}
      >
        <table className="table table-bordered table-hover v-align">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Category</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category, index) => {
                return (
                  <tr key={index}>
                    <td className="category-form-table-item-id">
                      {category._id}
                    </td>
                    <td className="category-form-table-item-name">
                    <input value={category.name} onChange={() => {}} />
                        <button className="category-form-table-item-name-save" color="success">
                          <IoPencil />
                        </button>
                        <button className="category-form-table-item-name-cancel" color="error">
                          <MdDeleteForever />
                        </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default Brand
