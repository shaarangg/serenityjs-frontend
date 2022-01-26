import "./App.scss";
import Home from "./pages/Home/Home";
import Docs from "./pages/Docs/Docs";
import ContactUs from "./pages/ContactUs/ContactUs";
import Api from "./pages/Api/Api";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route exact path="/docs" element={<Docs />} />
					<Route exact path="/contact" element={<ContactUs />} />
					<Route exact path="/api" element={<Api />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
