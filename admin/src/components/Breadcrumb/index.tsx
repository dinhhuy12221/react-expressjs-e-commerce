import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
// import HomeIcon from "@mui/icons-material/Home";

import "./index.css";
import { Link } from "react-router-dom";

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
  const backgroundColor = "#12254e";
  return {
    backgroundColor,
    height: theme.spacing(3),
    color: "rgba(255,255,255,0.7)",
    fontWeight: theme.typography.fontWeightRegular,
    "&:hover, &:focus": {
      backgroundColor: emphasize(backgroundColor, 0.2),
    },
    "&:active": {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(backgroundColor, 0.5),
    },
  };
});

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };

function Breadcrumb({ title, path }) {
  return (
    <div className="breadcrumb">
      {/* <h3 className="breadcrumb-title">{title}</h3> */}
      <Breadcrumbs separator={<span style={{ color: "#aaa", fontSize: "20px", fontWeight: "bold"}}>/</span>}aria-label="breadcrumb">
        {path &&
          path.map((item, index) => {
            return (
              <Link to={item.to} key={index}>
                <StyledBreadcrumb
                  label={item.name}
                  style={{
                    cursor: "pointer",
                  }}
                />
              </Link>
            );
          })}
      </Breadcrumbs>
    </div>
  );
}

export default Breadcrumb;
