import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Routes/Home";
import Search from "./Routes/Search";
import Tv from "./Routes/Tv";

function App() {
	return (
		<>
			<Router>
				<Switch>
					<Header />
					<Route path="/">
						<Home />
					</Route>
					<Route path="/tv">
						<Tv />
					</Route>
					<Route path="/search">
						<Search />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
