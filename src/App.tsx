import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Event from "./models/Event";
import { Header, List } from "semantic-ui-react";

// import { ducks } from "./demo";
// import DuckItem from "./DuckItem";

const baseURL = "http://localhost:5000/api/";

const App = () => {
	const [events, setEvents] = useState([]);

	useEffect(() => {
		axios.get(`${baseURL}events`).then((res) => {
			setEvents(res.data);
		});
	}, []);

	return (
		<div>
			<Header as={"h2"} icon={"users"} content={"AniVents"} />
			<List>
				{events.map((event: Event) => (
					<List.Item key={event.id}>{event.title}</List.Item>
				))}
			</List>
		</div>
	);
};

export default App;
