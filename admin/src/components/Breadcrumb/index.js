import { Breadcrumbs, Chip, emphasize, styled } from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";

import "./index.css";

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
});

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

function Breadcrumb(props) {
  const title = props.title;
  const path = props.path;

  return (
    <div className="card shadow border-0 w-100 flex-row p-4">
      <h5 className="mb-0">{title}</h5>
      <div className="ms-auto path" role="presentation">
        <Breadcrumbs aria-label="breadcrumb">
          {path &&
            path.map((item, index) => {
              return (
                <StyledBreadcrumb
                  key={index}
                  label={item}
                  style={{
                    cursor: "pointer",
                  }}
                />
              );
            })}
        </Breadcrumbs>
      </div>
    </div>
  );
}

export default Breadcrumb;
