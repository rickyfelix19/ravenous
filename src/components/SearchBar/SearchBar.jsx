import * as React from "react";
import { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export default function BasicTextFields() {
	//*** DO NOT TOUCH - for MUI */
	const [tabValue, setTabValue] = useState(0); // default value for tab: 0,1,2,...,N

	const handleChange = (event, newTabValue) => {
		setTabValue(newTabValue);
	};
	//*** DO NOT TOUCH - for MUI */

	const [tabFilter, setTabFilter] = useState("");
	const [searchBusiness, setSearchBusiness] = useState("");
	const [searchLocation, setSearchLocation] = useState("");

	const searchFilters = (filter) => {
		return setTabFilter(filter);
	};

	const searchBusinesses = (search) => {
		return setSearchBusiness(search);
	};

	const searchLocations = (location) => {
		return setSearchLocation(location);
	};

	const searchFunction = () =>
		console.log(
			// Searching Yelp with Pizza, Brooklyn, best_match
			// `Searching Yelp with ${searchBusiness}, ${searchLocation}, ${tabValue}`}
			`Searching Yelp with ${searchBusiness}, ${searchLocation}, ${tabFilter}`
		);

	useEffect(() => {
		return searchFunction();
	});

	const sortChoices = [
		{ id: "best_match", choice: "Best Match" },
		{ id: "rating", choice: "Highest Rated" },
		{ id: "review_count", choice: "Most Reviewed" },
	];

	return (
		<div
		// // style={{
		// // style={{
		// 	// background: "#2f2f2f",
		// 	// background: "rgba(0, 0, 0, 0.2)",
		// 	// color: "#e1e1fcfff",
		// 	// filter: "brightness(80%)",
		// // 	opacity: 0.95,
		// // 	backgroundImage: `url('https://s3.us-west-1.amazonaws.com/wakegov.com.if-us-west-1/s3fs-public/styles/max_1300x1300/public/images/2024-03/home_based_food.jpeg?itok=2j0OV3F0)`,
		// // }}
		>
			<div
				style={{
					width: "100%",
					margin: "1px",
					padding: "1px",
					opacity: 0.95,
					backgroundImage: `url('https://s3.us-west-1.amazonaws.com/wakegov.com.if-us-west-1/s3fs-public/styles/max_1300x1300/public/images/2024-03/home_based_food.jpeg?itok=2j0OV3F0)`,
				}}
			>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{ p: 1, m: 10 }}
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
						<Tab
							tabValue="one" //for MUI
							id={sortChoices[0].id}
							label={sortChoices[0].choice}
							onClick={() => setTabFilter(sortChoices[0].choice)}
						/>
						<Tab
							tabValue="two" //for MUI
							id={sortChoices[1].id}
							label={sortChoices[1].choice}
							onClick={() => setTabFilter(sortChoices[1].choice)}
						/>
						<Tab
							tabValue="three" //for MUI
							id={sortChoices[2].id}
							label={sortChoices[2].choice}
							onClick={() => setTabFilter(sortChoices[2].choice)}
						/>
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
						onChange={setSearchBusiness}
					/>
					<TextField
						sx={{ bgcolor: "rgb(225,225,252,0.8)", borderRadius: "5px" }}
						id="filled"
						label="Where?"
						variant="filled"
						focused
						color="primary"
						onChange={setSearchLocation}
					/>
				</Box>
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					sx={{ p: 5, m: 5 }}
				>
					<Button variant="contained" onClick={searchFunction}>
						Let's Go
					</Button>
				</Box>
			</div>
		</div>
	);
}

// Searching Yelp with {Pizza}, {Brooklyn}, {best_match}
