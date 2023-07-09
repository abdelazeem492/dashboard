import { Box } from "@mui/material";
import Bar from "./Bar";
import Heading from "../../components/Heading";

const BarChart = () => {
	return (
		<Box height={"75vh"}>
			<Heading
				head={"Bar chart"}
				body={"The minimum wage in Germany, France and Spain (EUR/month)"}
			/>
			<Bar />
		</Box>
	);
};

export default BarChart;
