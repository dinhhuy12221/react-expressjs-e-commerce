import React, { useContext, useEffect, useState } from "react";
import { emphasize, styled } from "@mui/material/styles";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Chip from "@mui/material/Chip";
import HomeIcon from "@mui/icons-material/Home";
import { Button } from "@mui/material";

import { MdCloudUpload } from "react-icons/md";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = (theme.palette.mode = "#112143");
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: "rgba(255,255,255,0.7)",
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.06),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.12),
    },
  };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function CategoryAdd() {
  const [category, setCategory] = useState({
    name: "",
    imgUrl: "",
    color: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategory({
        name: e.target.name.value,
        imgUrl: e.target.imgUrl.value,
        color: e.target.color.value,
    })

    alert(JSON.stringify(category))
};

  return (
    <>
      <div className="right-content w-100">
        <div className="card shadow border-0 w-100 flex-row p-4">
          <h5 className="mb-0">Product Upload</h5>
          <div className="ms-auto path" role="presentation">
            <Breadcrumbs aria-label="breadcrumb">
              <StyledBreadcrumb
                href="/dashboard"
                label="Dashboard"
                icon={<HomeIcon fontSize="small" />}
                style={{
                  cursor: "pointer",
                }}
              />
              <StyledBreadcrumb
                href="/categories"
                label="Category"
                style={{
                  cursor: "pointer",
                }}
              />
              <StyledBreadcrumb label="Category Upload" href="#" />
            </Breadcrumbs>
          </div>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-12">
              <div className="card p-3 mt-0">
                <h5 className="mb-4">Basic Information</h5>

                <div className="form-group">
                  <h6>CATEGROY</h6>
                  <input type="text" name="name" />
                </div>
                <div className="form-group">
                  <h6>IMAGE URL</h6>
                  <input type="text" name="imgUrl" />
                </div>
                <div className="form-group">
                  <h6>COLOR</h6>
                  <input type="text" name="color" />
                </div>
                <Button
                  type="submit"
                  className="btn-blue btn-lg btn-big d-flex align-items-center mt-4"
                >
                  <MdCloudUpload /> &nbsp;PUBLISHED AND VIEW
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
