import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
// import { ducks } from "./demo";
// import DuckItem from "./DuckItem";

const baseURL = "http://localhost:5000/api/";

const App = () => {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		axios.get(`${baseURL}activities`).then((res) => {
			console.log(res);
			setActivities(res.data);
		});
	}, []);

	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				{/* {ducks.map((duck) => (
					<DuckItem key={duck.name} duck={duck} />
				))} */}
				<ul>
					{activities.map((activity: any) => (
						<li key={activity.id}>{activity.title}</li>
					))}
				</ul>
			</header>
		</div>
	);
};

export default App;
