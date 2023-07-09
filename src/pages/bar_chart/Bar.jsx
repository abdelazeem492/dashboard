import { ResponsiveBar } from "@nivo/bar";
import { chartTheme } from "./theme";
import { data } from "./data";
import { useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Bar = ({ isDashboard = false }) => {
	const theme = useTheme();
	return (
		<ResponsiveBar
			theme={chartTheme(theme)}
			data={data}
			keys={["Spain", "France", "Germany"]}
			indexBy='year'
			margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
			padding={0.3}
			valueScale={{ type: "linear" }}
			indexScale={{ type: "band", round: true }}
			colors={{ scheme: "paired" }}
			borderColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			axisTop={null}
			axisRight={null}
			axisBottom={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: isDashboard ? null : "Year",
				legendPosition: "middle",
				legendOffset: 40,
			}}
			axisLeft={{
				tickSize: 5,
				tickPadding: 5,
				tickRotation: 0,
				legend: isDashboard ? null : "salary/month",
				legendPosition: "middle",
				legendOffset: -50,
			}}
			labelSkipWidth={12}
			labelSkipHeight={12}
			labelTextColor={{
				from: "color",
				modifiers: [["darker", 1.6]],
			}}
			legends={[
				{
					dataFrom: "keys",
					anchor: "bottom-right",
					direction: "column",
					justify: false,
					translateX: 120,
					translateY: 0,
					itemsSpacing: 2,
					itemWidth: 100,
					itemHeight: 20,
					itemDirection: "left-to-right",
					itemOpacity: 0.85,
					symbolSize: 20,
					effects: [
						{
							on: "hover",
							style: {
								itemOpacity: 1,
							},
						},
					],
				},
			]}
			role='application'
			ariaLabel='Nivo bar chart demo'
			barAriaLabel={(e) =>
				e.id + ": " + e.formattedValue + " in country: " + e.indexValue
			}
		/>
	);
};

export default Bar;
