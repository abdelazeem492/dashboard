import { Box } from "@mui/material";
import FirstRow from "./FirstRow";

import SecondRow from "./SecondRow";
import ThirdRow from "./ThirdRow";
import Heading from "../../components/Heading";

const Dashboard = () => {
	return (
		<Box display={"grid"} gap={3}>
			<Heading head={"Dashboard"} body={"Welcome to your dashboard"} />
			<FirstRow />
			<SecondRow />
			<ThirdRow />
		</Box>
	);
};

export default Dashboard;
