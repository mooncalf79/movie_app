// https://yts-proxy.now.sh/list_movies.json

import React from "react";
import { HashRouter,Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import detail from "./routes/detail"
import "./App.css"


function App(){
  return <HashRouter>
    <Navigation />
    <Route path="/" exact = {true} component={Home}/>
    <Route path="/About" component={About}/>
    <Route path="movie-detail" component ={detail}/>
  </HashRouter>
}

export default App;