import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./NavBar";
import { Route, Switch } from "react-router-dom";
import Menu from "./Menu";
import Item from "./Item";
import useItems from "./useItems";
import { snackContent, drinkContent } from "./content";

function App() {
	// Load State
	const [isLoading, setIsLoading] = useState(true);
	// Snacks items
	const snacks = useItems(setIsLoading, "snacks");
	// Drinks items
	const drinks = useItems(setIsLoading, "booze");

	if (isLoading) {
		return <p>Loading &hellip;</p>;
	}

	return (
		<div className="App">
			<BrowserRouter>
				<NavBar />
				<main>
					<Switch>
						<Route exact path="/">
							<Home snacks={snacks} drinks={drinks} />
						</Route>
						<Route exact path="/snacks">
							<Menu items={snacks} title="Snacks" content={snackContent} />
						</Route>
						<Route path="/snacks/:id">
							<Item items={snacks} cantFind="/snacks" />
						</Route>
						<Route exact path="/booze">
							<Menu items={drinks} title="Drinks" content={drinkContent} />
						</Route>
						<Route path="/drinks/:id">
							<Item items={drinks} cantFind="/booze" />
						</Route>
						<Route>
							<p>Hmmm. I can't seem to find what you want.</p>
						</Route>
					</Switch>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;
