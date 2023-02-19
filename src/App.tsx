import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Activity from "./models/Activity";
import { Header, List } from "semantic-ui-react";

// import { ducks } from "./demo";
// import DuckItem from "./DuckItem";

const baseURL = "http://localhost:5000/api/";

const App = () => {
	const [activities, setActivities] = useState([]);

	useEffect(() => {
		axios.get(`${baseURL}activities`).then((res) => {
			setActivities(res.data);
		});
	}, []);

	return (
		<div>
			<Header as={"h2"} icon={"users"} content={"AniVents"} />
			<List>
				{activities.map((activity: Activity) => (
					<List.Item key={activity.id}>{activity.title}</List.Item>
				))}
			</List>
		</div>
	);
};

export default App;
