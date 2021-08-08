import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Home from "./Home";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component = {Main}/>
          <Route exact path={"/home"} component = {Home}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}