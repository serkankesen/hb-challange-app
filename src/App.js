import React from "react";
import GlobalState from "./context/GlobalState";
import Header from "./components/Header";
import "./App.css";
import Navigation from "./components/Navigation";
import { Main } from "./components/Main";

function App() {
    return (
        <GlobalState>
            <div className="App">
                <Header />
                <Navigation />
                <Main />
            </div>
        </GlobalState>
    );
}

export default App;
