import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import PrivateComponent from "./Components/PrivateComponent/privatecomponent";
import UserLogin from "./Components/UserLogin/login";
import UserSignUp from "./Components/UserSignUp/signup";
import AdminSignUp from "./Components/AdminSignUp/signup";
import AdminLogin from "./Components/AdminSignUp/login";
import Profile from "./Components/Adda/Profile";
import Group from "./Components/Adda/Group";
import Event from "./Components/Adda/Event";
import PageNotFound from "./PageNotFound";
import TechUpdates from "./Components/TechUpdates/TechUpdates";
import EventSearch from "./Components/eventSearch/EventSearch";
import CommunitySearch from "./Components/CommunitySearch/CommunitySearch";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route element={<PrivateComponent />}>
						<Route path="/logout" element={<h1>logout</h1>}></Route>
						<Route
							path="/profile"
							element={<h1>profile</h1>}
						></Route>
					</Route>
					<Route path="/signup" element={<UserSignUp />} />
					<Route path="/login" element={<UserLogin />} />
					<Route path="/communityIndex" element={<CommunitySearch />} />
					<Route path="/adminSignup" element={<AdminSignUp />} />
					<Route path="/adminLogin" element={<AdminLogin />} />
					<Route path="/techupdates" element={<TechUpdates />} />
					<Route path="/eventSearch" element={<EventSearch />} />
					<Route path="/adda-profile" element={<Profile />} />
					<Route path="/adda-group" element={<Group />} />
					<Route path="/adda-event" element={<Event />} />

					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
