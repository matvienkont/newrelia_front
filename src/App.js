import React from 'react';
import './App.css';
import { BrowserRouter as Router,
		Route, 
		Switch } from "react-router-dom";
import Header from "./components/Header/Header";
import Workspace from "./components/Workspace/Workspace";
import { NotFound } from './components/NotFound/NotFound';

function App() {
	return (
		<Router>
    		<div className="App">
    	  		<Header />
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>

						<Route path="/workspace">
							<Workspace />
						</Route>

						<Route path="/login">
							<Login />
						</Route>
						
						<Route>
							<NotFound />
						</Route>
					</Switch>
   			</div>
		</Router>
  	);
}

const Home = () =>
{
	return (
		<h1>Home</h1>
	);
}

const Login = () =>
{
	return (
	<h2>Login Page</h2>
		);
}

export default App;
