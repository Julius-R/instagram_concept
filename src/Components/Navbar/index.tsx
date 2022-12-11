import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
// @ts-ignore
import { ReactComponent as Logo } from "./logo.svg";
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
							sm: ".45rem",
							lg: ".95rem 2rem"
						}
					}}>
					<Logo />
					<Box sx={{ flexGrow: 1 }} />
					<SearchBar />
					<Icons />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
