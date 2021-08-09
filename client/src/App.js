import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./Login";
import Home from "./Home";
import View from "./View";


export default function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/login"} component = {Login}/>
          <Route exact path={"/home"} component = {Home}/>
          <Route path={"/views"} component = {View}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}