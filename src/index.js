import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard";
import Layout from "./components/reusable/Layout";

import "./styles.css";

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Layout exact path="/" component={Dashboard} name="Ade" />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById("root")
);
