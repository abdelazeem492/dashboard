import { Box } from "@mui/material";
import Line from "./Line";
import Heading from "../../components/Heading";

const LineChart = () => {
	return (
		<Box height={"75vh"}>
			<Heading head={"Line chart"} body={"Simple Line Chart"} />
			<Line />
		</Box>
	);
};

export default LineChart;
