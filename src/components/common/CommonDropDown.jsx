import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">{props.label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.value}
          label={props.label}
          onChange={props.handleChange}
        >
          <MenuItem value={"Application Engineer - 1"}>
            Application Engineer - 1
          </MenuItem>
          <MenuItem value={"Application Engineer - 2"}>
            Application Engineer - 2
          </MenuItem>
          <MenuItem value={"Application Engineer - 3"}>
            Application Engineer - 3
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
