import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./routers/About";
import Home from "./routers/Home";
import Detail from "./routers/Detail";



function App(){
  return (<HashRouter>
          <Navigation />
          <Route path="/" exact={true} component={ Home } />
          <Route path="/about" component={ About } />
          <Route path="/movie/" component={ Detail } />
        </HashRouter>);
};

export default App;