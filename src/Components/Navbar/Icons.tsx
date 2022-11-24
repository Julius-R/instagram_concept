import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

export default function Icons() {
	return (
		<Box sx={{ display: { xs: "none", md: "flex" } }}>
			<IconButton
				size="large"
				aria-label="show 4 new mails"
				color="inherit">
				<Badge badgeContent={4} color="error">
					<FavoriteIcon />
				</Badge>
			</IconButton>
			<IconButton
				size="large"
				aria-label="show 17 new notifications"
				color="inherit">
				<Badge badgeContent={17} color="error">
					<PersonIcon />
				</Badge>
			</IconButton>
		</Box>
	);
}