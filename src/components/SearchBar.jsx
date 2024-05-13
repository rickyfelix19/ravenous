import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function BasicTextFields() {
	const [value, setValue] = React.useState("one");

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div
			style={{
				background: "#2f2f2f",
				// backgroundImage: `url('https://s3.us-west-1.amazonaws.com/wakegov.com.if-us-west-1/s3fs-public/styles/max_1300x1300/public/images/2024-03/home_based_food.jpeg?itok=2j0OV3F0)`,
				opacity: 0.8,
			}}
		>
			<div
				style={{
					width: "100%",
					margin: "1px",
					padding: "1px",
				}}
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{ p: 3, m: 3 }}
				>
					<Tabs
						value={value}
						onChange={handleChange}
						centered
						textColor="primary"
						indicatorColor="primary"
						aria-label="primary tabs example"
					>
						<Tab value="one" label="Best Match" />
						<Tab value="two" label="Highest Rated" />
						<Tab value="three" label="Most Reviewed" />
					</Tabs>
				</Box>

				<Box
					component="form"
					sx={{
						display: "flex",
						flexWrap: "wrap",
						p: 1,
						m: 1,
						justifyContent: "space-evenly",
						maxWidth: "100%",
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						sx={{ input: { color: "white" } }}
						id="filled"
						label="Search Businesses"
						variant="filled"
						focused
						color="primary"
					/>
					<TextField
						sx={{ input: { color: "white" } }}
						id="filled"
						label="Where?"
						variant="filled"
						focused
						color="primary"
					/>
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{ p: 5, m: 5 }}
				>
					<Button variant="contained">Let's Go</Button>
				</Box>
			</div>
		</div>
	);
}
