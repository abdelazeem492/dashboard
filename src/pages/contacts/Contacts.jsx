import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Heading from "../../components/Heading";

const Contacts = () => {
	return (
		<div style={{ height: 750 }}>
			<Heading
				head={"contacts"}
				body={"List of contacts for future reference"}
			/>
			<DataGrid
				slots={{
					toolbar: GridToolbar,
				}}
				rows={rows}
				// @ts-ignore
				columns={columns}
			/>
		</div>
	);
};

export default Contacts;
