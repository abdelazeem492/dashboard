import { Stack } from "@mui/material";
import Card from "./Card";
import { Email, PersonAdd, PointOfSale, Traffic } from "@mui/icons-material";
import { data1, data2, data3, data4 } from "./data";

const FirstRow = () => {
	return (
		<Stack direction={"row"} flexWrap={"wrap"} gap={1}>
			<Card
				icon={<Email />}
				count={"14,453"}
				title={"Email sent"}
				percentage={"+14%"}
				data={data1}
				scheme={"nivo"}
			/>
			<Card
				icon={<PointOfSale />}
				count={"431.223"}
				title={"Sales obtained"}
				percentage={"+21%"}
				data={data2}
				scheme={"category10"}
			/>
			<Card
				icon={<PersonAdd />}
				count={"32,433"}
				title={"New Clients"}
				percentage={"+5%"}
				data={data3}
				scheme={"accent"}
			/>
			<Card
				icon={<Traffic />}
				count={"2,14,452"}
				title={"Traffic Received"}
				percentage={"+44%"}
				data={data4}
				scheme={"dark2"}
			/>
		</Stack>
	);
};

export default FirstRow;
