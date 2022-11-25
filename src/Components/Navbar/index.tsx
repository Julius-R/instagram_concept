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
				<Toolbar
					sx={{
						backgroundColor: "#fff",
						color: "#333",
						p: {
							sm: ".35rem",
							lg: ".75rem 2rem"
						}
					}}>
					<Typography
						variant="h4"
						noWrap
						component="p"
						fontWeight={300}
						sx={{
							display: {
								xs: "none",
								sm: "block",
								marginRight: "2.5rem"
							}
						}}>
						Instagram
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<SearchBar />
					<Icons />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
