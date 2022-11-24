import * as React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
	return (
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
	);
}
