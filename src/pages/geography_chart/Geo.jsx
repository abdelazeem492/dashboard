/* eslint-disable no-mixed-spaces-and-tabs */
import { ResponsiveChoropleth } from "@nivo/geo";
import { data } from "./data";
import { chartTheme } from "./theme";
import { geo } from "./world_countries";
import { useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Geo = ({ isDashboard = false }) => {
	const theme = useTheme();
	return (
		<ResponsiveChoropleth
			data={data}
			theme={chartTheme(theme)}
			features={geo.features}
			margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
			colors='spectral'
			domain={[0, 1000000]}
			unknownColor='#666666'
			label='properties.name'
			valueFormat='.2s'
			projectionTranslation={[0.5, 0.5]}
			projectionRotation={[0, 0, 0]}
			enableGraticule={false}
			projectionScale={isDashboard ? 70 : 150}
			borderWidth={1.1}
			borderColor='#152538'
			legends={
				isDashboard
					? []
					: [
							{
								anchor: "bottom-left",
								direction: "column",
								justify: true,
								translateX: 20,
								translateY: -20,
								itemsSpacing: 0,
								itemWidth: 94,
								itemHeight: 18,
								itemDirection: "left-to-right",
								itemTextColor: theme.palette.text.primary,
								itemOpacity: 1,
								symbolSize: 18,
							},
					  ]
			}
		/>
	);
};

export default Geo;
