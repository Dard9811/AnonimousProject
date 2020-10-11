import React from 'react';
import Register from "./Register/Register.jsx";
import Home from "./Home/Home.jsx";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Register}/>
          <Route path="/home" component={Home}/>
        </Switch>       
      </Router>
    </div>
  );
}

export default App;