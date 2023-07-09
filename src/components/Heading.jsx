import { Box, Typography, useTheme } from "@mui/material";

// eslint-disable-next-line react/prop-types
const Heading = ({ head, body }) => {
	const theme = useTheme();
	return (
		<Box mb={2}>
			<Typography
				variant='h1'
				fontSize={28}
				fontWeight={600}
				color={theme.palette.primary.main}
				textTransform={"uppercase"}
			>
				{head}
			</Typography>
			<Typography
				variant='body1'
				fontWeight={500}
				color={theme.palette.text.primary}
			>
				{body}
			</Typography>
		</Box>
	);
};

export default Heading;
