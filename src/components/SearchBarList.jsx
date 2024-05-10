import SearchBar from "./SearchBar";
import React from "react";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

function SearchBarList() {
	return (
		<div>
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
					<SearchBar />
					<SearchBar />
                </Box>
                
			</div>
			;
		</div>
	);
}

export default SearchBarList;
