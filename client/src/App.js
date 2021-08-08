import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Main from "./Main";
import Login from "./Login";
import Home from "./Home";


export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"} component = {Main}/>
          <Route exact path={"/login"} component = {Login} />
          <Route path={"/home"} component = {Home}/>
          
        </Switch>
      </BrowserRouter>
    </div>
  );
}