import React from "react";
import Business from "./Business";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

function BusinessList() {
	return (
		<div>
			<Business />
			<Business />
			<Business />
		</div>
	);
}

export default BusinessList;
