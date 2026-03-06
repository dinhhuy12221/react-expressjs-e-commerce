import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

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

function Menu({ list, value, handleEvent }) {
  return (
    <Select
      value={value}
      onChange={handleEvent}
      displayEmpty
      inputProps={{ "aria-label": "Without label" }}
      MenuProps={MenuProps}
      className="w-100"
    >
      <MenuItem value="">
        <em>None</em>
      </MenuItem>
      {list &&
        list?.map((item, index) => {
          return (
            <MenuItem key={index} value={item}>
              {item?.name ? item.name : item}
            </MenuItem>
          );
        })}
      {/* <MenuItem value="Men" className="text-capitalize">
        Men
      </MenuItem>
      <MenuItem value="Women" className="text-capitalize">
        Women
      </MenuItem>
      <MenuItem value="Kids" className="text-capitalize">
        Kids
      </MenuItem> */}
    </Select>
  );
}

export default Menu;
