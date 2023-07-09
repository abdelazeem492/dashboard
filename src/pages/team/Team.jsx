/* eslint-disable no-mixed-spaces-and-tabs */
import { DataGrid } from "@mui/x-data-grid";
import { rows } from "./data";
import { Box, Typography, useTheme } from "@mui/material";
import {
	AdminPanelSettingsOutlined,
	LockOpenOutlined,
	SecurityOutlined,
} from "@mui/icons-material";
import Heading from "../../components/Heading";

const Team = () => {
	const theme = useTheme();

	const currentMode = localStorage.getItem("currentMode");

	const columns = [
		{
			field: "id",
			headerName: "ID",
			width: 33,
			align: "center",
			headerAlign: "center",
		},
		{
			field: "name",
			headerName: "NAME",
			flex: 1,
			align: "center",
			headerAlign: "center",
		},
		{
			field: "email",
			headerName: "EMAIL",
			flex: 1,
			align: "center",
			headerAlign: "center",
		},
		{
			field: "age",
			headerName: "AGE",
			flex: 1,
			align: "center",
			headerAlign: "center",
		},
		{
			field: "phone",
			headerName: "PHONE",
			flex: 1,
			align: "center",
			headerAlign: "center",
		},
		{
			field: "access",
			headerName: "ACCESS",
			flex: 1,
			align: "center",
			headerAlign: "center",
			renderCell: ({ row: { access } }) => (
				<Box
					sx={{
						display: "flex",
						alignItems: "center",
						p: "5px",
						width: "100px",
						borderRadius: "5px",
						justifyContent: "center",
						bgcolor:
							access === "Admin"
								? theme.palette.info[currentMode === "dark" ? "dark" : "light"]
								: access === "Manager"
								? theme.palette.secondary[
										currentMode === "dark" ? "dark" : "light"
								  ]
								: theme.palette.success[
										currentMode === "dark" ? "dark" : "light"
								  ],
					}}
				>
					{access === "Admin" ? (
						<AdminPanelSettingsOutlined fontSize='small' />
					) : access === "Manager" ? (
						<SecurityOutlined fontSize='small' />
					) : (
						<LockOpenOutlined fontSize='small' />
					)}
					<Typography fontSize='13px' ml={"2px"}>
						{access}
					</Typography>
				</Box>
			),
		},
	];

	return (
		<div style={{ height: 720 }}>
			<Heading head={"Team"} body={"Managing your team members"} />
			<DataGrid
				sx={{ overflow: "auto" }}
				rows={rows}
				// @ts-ignore
				columns={columns}
			/>
		</div>
	);
};

export default Team;
