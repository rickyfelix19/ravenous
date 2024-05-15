import logo from "./logo.svg";
import "./App.css";
import BusinessList from "./components/Business/BusinessList";
import SearchBar from "./components/SearchBar/SearchBar";
import { businessData } from "./components/Business/businessData";

import Box from "@mui/material/Box";

function App() {
	return (
		<div>
			<h1
				style={{
					backgroundColor: "#c39948",
					color: "#ffffff",
					margin: "auto",
					padding: "20px",
					textAlign: "center",
				}}
			>
				ravenous
			</h1>
			<div style={{ backgroundColor: "#e4e4e4" }}>
				<SearchBar />
				<BusinessList list={businessData} />
			</div>
		</div>
	);
}

export default App;
