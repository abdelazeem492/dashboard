import { Box } from "@mui/material";
import Pie from "./Pie";
import Heading from "../../components/Heading";

const PieChart = () => {
	return (
		<Box height={"75vh"}>
			<Heading
				head={"pie chart"}
				body={"Simple pie chart React,Angular, Nuxt, Next and Vue "}
			/>
			<Pie />
		</Box>
	);
};

export default PieChart;
