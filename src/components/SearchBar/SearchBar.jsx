import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function BasicTextFields() {
	const sortChoices = [
		{ id: "best_match", choice: "Best Match" },
		{ id: "rating", choice: "Highest Rated" },
		{ id: "review_count", choice: "Most Reviewed" },
	];

	const [tabValue, setTabValue] = useState(""); // default value for tab

	const handleChange = (event, newTabValue) => {
		setTabValue(newTabValue);
	};

	const [searchBusiness, setSearchBusiness] = useState("");
	const [searchLocation, setSearchLocation] = useState("");

	return (
		<div
			style={{
				// background: "#2f2f2f",
				// background: "rgba(0, 0, 0, 0.2)",
				opacity: 0.95,
				backgroundImage: `url('https://s3.us-west-1.amazonaws.com/wakegov.com.if-us-west-1/s3fs-public/styles/max_1300x1300/public/images/2024-03/home_based_food.jpeg?itok=2j0OV3F0)`,
				// color: "#e1e1fcfff",
				// filter: "brightness(80%)",
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
					sx={{ p: 1, m: 1 }}
				>
					<Tabs
						value={tabValue}
						onChange={handleChange}
						centered
						textColor="primary"
						indicatorColor="primary"
						aria-label="primary tabs example"
						width="100%"
						sx={{ bgcolor: "rgb(225,225,252,0.8)", borderRadius: "5px" }}
					>
						<Tab tabValue="one" label="Best Match" />
						<Tab tabValue="two" label="Highest Rated" />
						<Tab tabValue="three" label="Most Reviewed" />
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
						width: "100%",
					}}
					noValidate
					autoComplete="off"
				>
					<TextField
						sx={{ bgcolor: "rgb(225,225,252,0.8)", borderRadius: "5px" }}
						id="filled"
						label="Search Businesses"
						variant="filled"
						focused
						color="primary"
					/>
					<TextField
						sx={{ bgcolor: "rgb(225,225,252,0.8)", borderRadius: "5px" }}
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
