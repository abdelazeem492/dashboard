/* eslint-disable no-mixed-spaces-and-tabs */
import { ResponsivePie } from "@nivo/pie";
import { chartTheme } from "./theme";
import { data } from "./data";
import { useTheme } from "@mui/material";
// eslint-disable-next-line react/prop-types
const Pie = ({ isDashboard = false }) => {
	const theme = useTheme();
	return (
		<ResponsivePie
			data={data}
			theme={chartTheme(theme)}
			margin={
				isDashboard
					? { top: 5, right: 0, bottom: 5, left: 0 }
					: { top: 40, right: 80, bottom: 80, left: 80 }
			}
			innerRadius={isDashboard ? 0.7 : 0.5}
			padAngle={0.7}
			cornerRadius={3}
			activeOuterRadiusOffset={8}
			colors={{ scheme: "nivo" }}
			borderWidth={1}
			borderColor={{
				from: "color",
				modifiers: [["darker", 0.2]],
			}}
			arcLinkLabelsSkipAngle={10}
			arcLinkLabelsTextColor={theme.palette.text.primary}
			arcLinkLabelsThickness={2}
			arcLinkLabelsColor={{ from: "color" }}
			arcLabelsSkipAngle={10}
			enableArcLabels={isDashboard ? false : true}
			enableArcLinkLabels={isDashboard ? false : true}
			arcLabelsTextColor={{
				from: "color",
				modifiers: [["darker", 2]],
			}}
			legends={
				isDashboard
					? []
					: [
							{
								anchor: "bottom",
								direction: "row",
								justify: false,
								translateX: 0,
								translateY: 56,
								itemsSpacing: 0,
								itemWidth: 100,
								itemHeight: 18,
								itemTextColor: theme.palette.text.primary,
								itemDirection: "left-to-right",
								itemOpacity: 1,
								symbolSize: 18,
								symbolShape: "circle",
								effects: [
									{
										on: "hover",
										style: {
											itemTextColor: theme.palette.text.primary,
										},
									},
								],
							},
					  ]
			}
		/>
	);
};

export default Pie;
