import { useEffect, useState } from "react";
import Breadcrumb from "../../components/Breadcrumb";
import { getCategories } from "../../api/category";
import { getBrands } from "../../api/brand";
import "./index.css";

export default function CategoryBrand() {
  const [categories, setCategories] = useState<any>(null);
  const [brands, setBrands] = useState<any>(null);
  const [category, setCategory] = useState<any>({ name: "" })
  const [brand, setBrand] = useState<any>({ name: "" })

  const handleChange = (e, index) => {
    const { name, value } = e.target

    if (name === "category") {
      setCategories(prev => {
        if (!prev) return null
        const newCategories = [...categories]
        newCategories[index].name = value
        return newCategories
      })
    } else {
      setBrands(prev => {
        if (!prev) return null
        const newBrands = [...brands]
        newBrands[index].name = value
        return newBrands
      })
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();

  };

  useEffect(() => {
    const asyncHandle = async () => {
      const result = await getBrands();
      setBrands(result.data);
    };
    asyncHandle();
  }, []);

  useEffect(() => {
    const asyncHandle = async () => {
      const result = await getCategories();
      setCategories(result.data);
    };
    asyncHandle();
  }, []);

  return (
    <div className="category-brand">
      <Breadcrumb
        path={[
          { name: "Dashboard", to: "/dashboard" },
          { name: "Categories & Brands", to: "/categories-brands" },
        ]}
      />
      <form
        className="category-brand-form"
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
                    <td className="category-brand-form-table-item-id">{item._id}</td>
                    <td className="category-brand-form-table-item-name">
                      <input name="category" value={item.name} onChange={(e) => {
                        handleChange(e, index)
                      }} />
                      <button
                        className="category-brand-form-table-item-name-save"
                        color="success"
                      >
                        Save
                      </button>
                      <button
                        className="category-brand-form-table-item-name-cancel"
                        color="error"
                      >
                        Delete
                      </button>
                    </td>
                    <td className="category-brand-form-table-item-name">
                      <input name="category" value={category.name} onChange={(e) => {
                        handleChange(e, index)
                      }} />
                      <button
                        className="category-brand-form-table-item-name-save"
                        color="success"
                      >
                        Create
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </form>
      <form
        className="category-brand-form"
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
                    <td className="category-brand-form-table-item-id">{item._id}</td>
                    <td className="category-brand-form-table-item-name">
                      <input name="brand" value={item.name} onChange={(e) => {
                        handleChange(e, index)
                      }} />
                      <button
                        className="category-brand-form-table-item-name-save"
                        color="success"
                      >
                        Save
                      </button>
                      <button
                        className="category-brand-form-table-item-name-cancel"
                        color="error"
                      >
                        Delete
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
