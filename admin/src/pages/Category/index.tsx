import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { MdCloudUpload } from "react-icons/md";
import { IoPencil } from "react-icons/io5";
import { RiDeleteBin6Fill } from "react-icons/ri";

import "./index.css";
import Breadcrumb from "../../components/Breadcrumb";
import { getCategories } from "../../api/category";

export default function Category() {
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
      const result = await getCategories()
      setCategories(result.data)
    }
  }, [])

  return (
      <div className="category">
        <Breadcrumb
          path={[
            { name: "Dashboard", to: "/dashboard" },
            { name: "Categories", to: "/categories" },
          ]}
        />
        <form className="form"
        // onSubmit={handleSubmit}
        >
          <div className="row">
              <div className="card p-3 mt-0">
                <h5 className="mb-4">Information</h5>

                <div className="form-group">
                  <table className="table table-bordered table-hover v-align">
                    <thead className="table-dark">
                      <tr>
                        <th>CATEGORY</th>
                        <th>ACTION</th>
                      </tr>
                    </thead>
                    <tbody>
                      {categories &&
                        categories.map((category, index) => {
                          return (
                            <tr key={index}>
                              <td className="text-center">{category.name}</td>
                              <td>
                                <div className="actions d-flex align-items-center justify-content-center">
                                  <Button className="success" color="success">
                                    <IoPencil />
                                  </Button>
                                  <Button className="error" color="error">
                                    <RiDeleteBin6Fill />
                                  </Button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
          </div>
        </form>
      </div>
  );
}
