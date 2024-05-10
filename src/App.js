import logo from "./logo.svg";
import "./App.css";
import BusinessList from "./components/BusinessList";
import SearchBar from "./components/SearchBar";

import Box from "@mui/material/Box";

function App() {
	return (
		<div>
			<h1
				style={{
					backgroundColor: "#222",
					color: "#1976d2",
					margin: "auto",
					padding: "20px",
					textAlign: "center",
				}}
			>
				Ravenous
			</h1>
			<SearchBar />
			<BusinessList />
		</div>
	);
}

export default App;
