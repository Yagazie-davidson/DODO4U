import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Cart from "./routes/Cart";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Cart />
		</div>
	);
}

export default App;
