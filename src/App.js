import React, {useState} from 'react';
import Navbar from "./components/navbar/navbar";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./pages/Home/home";
import About from "./pages/About/about";

function App() {
    const [currentValue, setCurrentValue] = useState(undefined);

    return (
        <Router>
        <Navbar/>
            <Switch>
                <Route exact path="/">
                    <Home setCurrentValue={setCurrentValue} currentValue={currentValue}/>
                </Route>
                <Route path="/about">
                    <About />
                </Route>
            </Switch>
        </Router>

    );
}

export default App;
