import * as React from "react";
import Box from "@mui/material/Box";
import OutlinedInput from "@mui/material/OutlinedInput";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
	return (
		<FormControl
			sx={{
				width: {
					sm: "25%"
				},
				marginRight: "2rem"
			}}
			variant="outlined">
			<OutlinedInput
				sx={{ height: "2.5rem" }}
				id="outlined-adornment-password"
				type="text"
				endAdornment={
					<InputAdornment position="end">
						<IconButton
							aria-label="toggle password visibility"
							edge="end">
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
				placeholder="Search by username"
			/>
		</FormControl>
	);
}

/*
<FormControl sx={{ m: 1, width: "30%" }} variant="standard">
			<Input
				placeholder="Search by username"
				endAdornment={
					<InputAdornment position="end">
						<IconButton aria-label="Search button">
							{" "}
							<SearchIcon />
						</IconButton>
					</InputAdornment>
				}
			/>
		</FormControl>
*/
