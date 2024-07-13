// Filename - App.js
import React from "react";
import ReactDOM from "react-dom"

const App = () => {
	return (
		<div className="App">
			<h1>Hello World from react</h1>
		</div>
	);
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App />);
