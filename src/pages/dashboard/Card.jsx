import { Paper, Stack, Typography, useTheme } from "@mui/material";
import Chart from "./Chart";

// eslint-disable-next-line react/prop-types
const Card = ({ icon, count, title, data, scheme, percentage }) => {
	const theme = useTheme();
	return (
		<Paper
			sx={{
				display: "flex",
				justifyContent: "space-between",
				alignItems: "center",
				flexGrow: 1,
				p: 2,
				minWidth: 330,
			}}
		>
			<Stack gap={1}>
				<Typography color={theme.palette.primary.main}>{icon}</Typography>
				<Typography fontSize={14}>{count}</Typography>
				<Typography>{title}</Typography>
			</Stack>

			<Stack gap={1} textAlign={"center"}>
				<Chart data={data} scheme={scheme} />
				<Typography>{percentage}</Typography>
			</Stack>
		</Paper>
	);
};

export default Card;
