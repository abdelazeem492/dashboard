import { Box, useTheme } from "@mui/material";
import { ResponsivePie } from "@nivo/pie";

// eslint-disable-next-line react/prop-types
const Chart = ({ data, scheme }) => {
	const theme = useTheme();
	return (
		<Box height={"70px"} width={"70px"}>
			<ResponsivePie
				data={data}
				margin={{ top: 5, right: 0, bottom: 5, left: 0 }}
				innerRadius={0.7}
				theme={{
					textColor: theme.palette.text.primary,
					fontSize: 11,
					tooltip: {
						container: {
							background: theme.palette.background.default,
							color: theme.palette.text.primary,
							fontSize: 12,
						},
						basic: {},
						chip: {},
						table: {},
						tableCell: {},
						tableCellValue: {},
					},
				}}
				colors={{ scheme: scheme }}
				enableArcLabels={false}
				enableArcLinkLabels={false}
				cornerRadius={3}
				activeOuterRadiusOffset={2}
				borderWidth={1}
				borderColor={{
					from: "color",
					modifiers: [["darker", 0.2]],
				}}
			/>
		</Box>
	);
};

export default Chart;
