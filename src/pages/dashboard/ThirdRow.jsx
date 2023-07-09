import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Pie from "../pie_chart/Pie";
import Bar from "../bar_chart/Bar";
import Geo from "../geography_chart/Geo";

const ThirdRow = () => {
	const theme = useTheme();
	return (
		<Stack
			sx={{ flexDirection: { sm: "column", md: "row", lg: "row" } }}
			flexWrap={"wrap"}
			gap={1}
		>
			<Paper sx={{ p: 1, py: 2, minWidth: "30%" }}>
				<Typography
					fontSize={22}
					fontWeight={"bold"}
					color={theme.palette.primary.main}
					p={1}
				>
					Campaign
				</Typography>
				<Box textAlign={"center"}>
					<Box height={200}>
						<Pie isDashboard={true} />
					</Box>
					<Typography
						fontSize={20}
						fontWeight={"bold"}
						color={theme.palette.text.primary}
						mt={2}
					>
						$48,352 revenue generated
					</Typography>

					<Typography
						variant='body1'
						fontWeight={"bold"}
						color={theme.palette.text.primary}
					>
						Includes extra misc expenditures and costs
					</Typography>
				</Box>
			</Paper>
			<Paper sx={{ flexGrow: 1, p: 1, py: 2, minWidth: "33%" }}>
				<Typography
					fontSize={22}
					fontWeight={"bold"}
					color={theme.palette.primary.main}
					p={1}
				>
					Sales Quantity
				</Typography>
				<Box height={300}>
					<Bar isDashboard={true} />
				</Box>
			</Paper>
			<Paper sx={{ flexGrow: 1, minWidth: "33%" }}>
				<Box height={400}>
					<Geo isDashboard={true} />
				</Box>
			</Paper>
		</Stack>
	);
};

export default ThirdRow;
