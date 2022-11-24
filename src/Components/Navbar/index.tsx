import * as React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

import Icons from "./Icons";

export default function Navbar() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography
						variant="h6"
						noWrap
						component="div"
						sx={{ display: { xs: "none", sm: "block" } }}>
						Instagram
					</Typography>
					<Box sx={{ flexGrow: 1 }} />
					<Icons />
				</Toolbar>
			</AppBar>
		</Box>
	);
}
