import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Views/Home.jsx";

const App = () => {
  return (
    <Router className="App">
        <Switch>
            <Route path="/" component={ Home }/>
        </Switch>
    </Router>
  );
}

export default App;
