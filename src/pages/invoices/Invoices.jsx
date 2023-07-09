import { DataGrid } from "@mui/x-data-grid";
import { columns, rows } from "./data";
import Heading from "../../components/Heading";

const Invoices = () => {
	return (
		<div style={{ height: 750 }}>
			<Heading head={"invoices"} body={"List of invoices balance"} />
			<DataGrid
				checkboxSelection
				rows={rows}
				// @ts-ignore
				columns={columns}
			/>
		</div>
	);
};

export default Invoices;
