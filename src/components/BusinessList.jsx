import React from "react";
import Business from "./Business";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

function BusinessList() {
	return (
		<>
			<div style={{ width: "100%" }}>
				<Box
					sx={{
						display: "flex",
						flexWrap: "wrap",
						p: 1,
						m: 1,
						justifyContent: "space-evenly",
					}}
				>
					<Business />
					{/* <Business />
					<Business />
					<Business />
					<Business />
					<Business /> */}
				</Box>
			</div>
		</>
	);
}

export default BusinessList;
