import logo from "./logo.svg";
import "./App.css";
import Business from "./components/Business";
import BusinessList from "./components/BusinessList";

function App() {
	return (
		<div>
			<h1>Ravenous</h1>
			<BusinessList />
		</div>
	);
}

export default App;
