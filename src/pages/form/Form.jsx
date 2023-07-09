// @ts-nocheck
import {
	Box,
	Button,
	MenuItem,
	Snackbar,
	Stack,
	TextField,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Heading from "../../components/Heading";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const role = [
	{
		value: "Admin",
		label: "Admin",
	},
	{
		value: "Manger",
		label: "Manger",
	},
	{
		value: "User",
		label: "User",
	},
];

const Form = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	const Alert = React.forwardRef(function Alert(props, ref) {
		return (
			<MuiAlert
				elevation={6}
				ref={ref}
				variant='filled'
				{...props}
				sx={{ color: "#fff" }}
			/>
		);
	});

	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === "clickaway") {
			return;
		}

		setOpen(false);
	};

	const onSubmit = () => handleClick();
	return (
		<Box
			component='form'
			onSubmit={handleSubmit(onSubmit)}
			sx={{
				display: "flex",
				flexDirection: "column",
				gap: 3,
			}}
			noValidate
			autoComplete='off'
		>
			<Heading head={"new user"} body={"Create a new user account"} />
			<Stack direction={"row"} gap={3}>
				<TextField
					{...register("firstName", {
						required: {
							value: true,
							message: "First name is required",
						},
						minLength: {
							value: 2,
							message: "Enter 2 letters at least",
						},
					})}
					error={Boolean(errors.firstName)}
					// @ts-ignore
					helperText={errors.firstName?.message}
					label='First Name'
					variant='filled'
					sx={{ flexGrow: 1 }}
				/>
				<TextField
					{...register("lastName", {
						required: {
							value: true,
							message: "Last name is required",
						},
						minLength: {
							value: 2,
							message: "Enter 2 letters at least",
						},
					})}
					error={Boolean(errors.lastName)}
					// @ts-ignore
					helperText={errors.lastName?.message}
					label='Last Name'
					variant='filled'
					sx={{ flexGrow: 1 }}
				/>
			</Stack>

			<TextField
				{...register("email", {
					required: {
						value: true,
						message: "Email address is required",
					},
					pattern: {
						value: /^(.+)@(.+)\.(.+)$/,
						message: "Invalid email address",
					},
				})}
				error={Boolean(errors.email)}
				// @ts-ignore
				helperText={errors.email?.message}
				type='email'
				label='Email Address'
				variant='filled'
			/>
			<TextField
				{...register("phoneNumber", {
					required: {
						value: true,
						message: "Phone number is required",
					},
					minLength: {
						value: 4,
						message: "Enter 4 numbers at least",
					},
					maxLength: {
						value: 15,
						message: "Must be less than 16 numbers",
					},
				})}
				error={Boolean(errors.phoneNumber)}
				// @ts-ignore
				helperText={errors.phoneNumber?.message}
				label='Phone Number'
				variant='filled'
				type='number'
			/>
			<TextField label='Address 1' variant='filled' />
			<TextField label='Address 2' variant='filled' />

			<TextField
				id='filled-select-currency'
				select
				label='Role'
				defaultValue='User'
				helperText='Please select your role'
				variant='filled'
			>
				{role.map((option) => (
					<MenuItem key={option.value} value={option.value}>
						{option.label}
					</MenuItem>
				))}
			</TextField>

			<Box textAlign={"right"}>
				<Button
					type='submit'
					sx={{ textTransform: "capitalize" }}
					variant='contained'
				>
					Create New User
				</Button>
			</Box>
			<Snackbar
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				open={open}
				autoHideDuration={2000}
				onClose={handleClose}
			>
				<Alert severity='success'>New User Created Successfully</Alert>
			</Snackbar>
		</Box>
	);
};

export default Form;
