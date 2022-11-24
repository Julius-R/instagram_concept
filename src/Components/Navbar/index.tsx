import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import SearchBar from "./SearchBar";

import Icons from "./Icons";

export default function Navbar() {
	return (
		<Box
			sx={{
				flexGrow: 1
			}}>
			<AppBar position="static">
				<Toolbar sx={{ backgroundColor: "#fff", color: "#333" }}>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{
							display: {
								xs: "none",
								sm: "block",
								marginRight: "2.5rem"
							}
						}}>
						Instagram
					</Typography>
					<SearchBar />
					<Box sx={{ flexGrow: 1 }} />
					<Icons />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
