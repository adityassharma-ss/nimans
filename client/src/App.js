import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Pages
import Search from './pages/Search';
import Recommend from './pages/Recommend';
import Landing from './pages/Landing';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Profile from './pages/Profile';
import About from './pages/About';

//Components
import PrivateRoute from './components/PrivateRoute';
import GlobalProvider from './context/GlobalState';
import Navbar from './pages/Navbar';

const App = () => {
	return (
		<GlobalProvider>
			<Router>
			<Navbar />
				<Switch>
					<Route exact path="/" component={Landing} />
					<Route exact path="/search" component={Search} />
					<Route exact path="/recommend" component={Recommend} />
					<Route exact path="/signup" component={Signup} />
					<Route exact path="/login" component={Login} />
					<Route exact path="/about" component={About} />
					<PrivateRoute exact path="/profile" component={Profile} />
				</Switch>
			</Router>
		</GlobalProvider>
	);
};

export default App;
