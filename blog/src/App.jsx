import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";

function App() {
    return (
        <Router>
            <div className="app">
                <Navbar />
                <Home />
                {/* <Routes>
                    <Route path="/" exact component={Home} />
                    <Route path="/posts" component={Posts} />
                </Routes> */}
            </div>
        </Router>
    );
}

export default App;
