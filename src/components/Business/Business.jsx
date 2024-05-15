import React from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

function Business(props) {
	// let business = {
	// 	imageSrc:
	// 		"https://content.codecademy.com/programs/react/ravenous/pizza.jpg",
	// 	name: "MarginOtto Pizzeria",
	// 	address: "1010 Paddington Way",
	// 	city: "Flavortown",
	// 	state: "NY",
	// 	zipCode: "10101",
	// 	category: "Italian",
	// 	rating: 4.5,
	// 	reviewCount: 90,
	// };

	return (
		<Card sx={{ maxWidth: 320, width: 300 }}>
			<CardMedia
				sx={{ height: 200 }}
				image={props.info.imageSrc}
				title={props.info.name}
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">
					{props.info.name}
				</Typography>
				<Grid container spacing={2}>
					<Grid item xs={6} md={8}>
						<Typography variant="body2" color="text.secondary">
							{props.info.address} <br />
							{props.info.city} <br />
							{props.info.state} {props.info.zipCode}
							<br />
						</Typography>
					</Grid>
					<Grid item xs={6} md={4}>
						<Typography variant="body2" color="text.secondary">
							{/* change this to yellow and bigger font */}
							{props.info.category} <br />
							{/* change this to yellow */}
							{props.info.rating} stars
							<br />
							{props.info.reviewCount} reviews
						</Typography>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
}

export default Business;

// Each Business component should display an
// image, name, address, city, state, zipcode, category, rating, and review count.
