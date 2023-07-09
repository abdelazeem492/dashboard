import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import Line from "../line_chart/Line";
import { Transactions } from "./data";

const SecondRow = () => {
	const theme = useTheme();
	return (
		<Stack gap={2} direction={"row"} flexWrap={"wrap"}>
			<Paper sx={{ flexGrow: 1, padding: 2, minWidth: "500px" }}>
				<Stack>
					<Typography
						fontSize={22}
						fontWeight={"bold"}
						color={theme.palette.primary.main}
						mb={1}
					>
						Revenue Generated
					</Typography>
					<Typography variant='body2'>$59,342.32</Typography>
				</Stack>
				<Box height={300}>
					<Line />
				</Box>
			</Paper>
			<Box overflow={"auto"} minWidth={300} maxHeight={400} flexGrow={1}>
				<Paper>
					<Typography
						fontSize={22}
						fontWeight={"bold"}
						color={theme.palette.primary.main}
						p={1}
					>
						Recent Transactions
					</Typography>
				</Paper>

				{Transactions.map((transaction, idx) => (
					<Paper
						key={idx}
						sx={{
							mt: 1,
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							px: 1,
						}}
					>
						<Box p={1}>
							<Typography variant='body1' fontWeight={600}>
								{transaction.txId}
							</Typography>
							<Typography variant='body2'>{transaction.user}</Typography>
						</Box>
						<Typography variant='body1'>{transaction.date}</Typography>
						<Typography
							borderRadius={1.2}
							p={1}
							bgcolor={theme.palette.error.main}
							color={theme.palette.getContrastText(theme.palette.error.main)}
							variant='body2'
						>
							${transaction.cost}
						</Typography>
					</Paper>
				))}
			</Box>
		</Stack>
	);
};

export default SecondRow;
