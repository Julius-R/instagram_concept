import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import ExploreOutlinedIcon from "@mui/icons-material/ExploreOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import Avatar from "@mui/material/Avatar";

const iconSize = { fontSize: "1.579rem", fontWeight: "thin" },
	iconItems = [
		{
			icon: <FavoriteBorderOutlinedIcon sx={{ ...iconSize }} />,
			hasBadge: true,
			notificationCount: 3
		},
		{
			icon: <MailOutlineIcon sx={{ ...iconSize }} />,
			hasBadge: true,
			notificationCount: 8
		},
		{
			icon: <ExploreOutlinedIcon sx={{ ...iconSize }} />,
			hasBadge: false,
			notificationCount: 0
		},
		{
			icon: <AddBoxOutlinedIcon sx={{ ...iconSize }} />,
			hasBadge: false,
			notificationCount: 0
		}
	];

const IconList = ({
	icon,
	hasBadge = false,
	notificationCount
}: {
	icon: JSX.Element | string;
	hasBadge?: boolean;
	notificationCount?: number;
}) => (
	<IconButton aria-label="show 4 new mails" color="inherit">
		{hasBadge ? (
			<Badge badgeContent={notificationCount} color="error">
				{icon}
			</Badge>
		) : (
			<>{icon}</>
		)}
	</IconButton>
);

export default function Icons() {
	return (
		<Box sx={{ display: { xs: "none", md: "flex" } }}>
			{iconItems.map((item, idx) => (
				<IconList
					key={`item-${idx}`}
					icon={item.icon}
					hasBadge={item.hasBadge}
					notificationCount={item.notificationCount}
				/>
			))}
			<Avatar
				alt="Remy Sharp"
				src="https://i.pravatar.cc/300"
				sx={{ width: 40, height: 40, marginLeft: "1.15rem" }}
			/>
		</Box>
	);
}
