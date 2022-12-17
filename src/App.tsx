import React from "react";
import "./App.css";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Cart from "./routes/Cart";
function App() {
	return (
		<div className="App">
			<NavBar />
			<Hero />
		</div>
	);
}

export default App;
