import { useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import { IoPencil } from "react-icons/io5";

import "./index.css";
import Breadcrumb from "../../components/Breadcrumb";
import { getCategories } from "../../api/category";
import { getBrands } from "../../api/brand";

export default function CategoryBrand() {
  const [categories, setCategories] = useState<any>(null);
  const [brands, setBrands] = useState<any>(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setCategory({
  //     name: e.target.name.value,
  //     imgUrl: e.target.imgUrl.value,
  //     color: e.target.color.value,
  //   });

  //   alert(JSON.stringify(brand));
  // };

  useEffect(() => {
    const asyncHandle = async () => {
      const result = await getBrands();
      setBrands(result.data);
    };
    asyncHandle();
  }, []);
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
      const result = await getCategories();
      setCategories(result.data);
    };
    asyncHandle();
  }, []);

  return (
    <div className="category">
      <Breadcrumb
        path={[
          { name: "Dashboard", to: "/dashboard" },
          { name: "Categories & Brands", to: "/categories-brands" },
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
              categories.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="category-form-table-item-id">{item._id}</td>
                    <td className="category-form-table-item-name">
                      <input value={item.name} onChange={() => {}} />
                      <button
                        className="category-form-table-item-name-save"
                        color="success"
                      >
                        <IoPencil />
                      </button>
                      <button
                        className="category-form-table-item-name-cancel"
                        color="error"
                      >
                        <MdDeleteForever />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </form>
      <form
        className="brand-form"
        // onSubmit={handleSubmit}
      >
        <table className="table table-bordered table-hover v-align">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Brand</th>
            </tr>
          </thead>
          <tbody>
            {brands &&
              brands.map((item, index) => {
                return (
                  <tr key={index}>
                    <td className="brand-form-table-item-id">{item._id}</td>
                    <td className="brand-form-table-item-name">
                      <input value={item.name} onChange={() => {}} />
                      <button
                        className="brand-form-table-item-name-save"
                        color="success"
                      >
                        <IoPencil />
                      </button>
                      <button
                        className="brand-form-table-item-name-cancel"
                        color="error"
                      >
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
  );
}
