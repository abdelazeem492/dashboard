import { Box, useTheme } from "@mui/material";
import Geo from "./Geo";
import Heading from "../../components/Heading";

const GeographyChart = () => {
	const theme = useTheme();
	return (
		<div>
			<Heading head={"Geography chart"} body={"Simple geography chart"} />
			<Box
				height={"75vh"}
				border={`1px solid ${theme.palette.text.primary}`}
				borderRadius={2}
			>
				<Geo />
			</Box>
		</div>
	);
};

export default GeographyChart;
