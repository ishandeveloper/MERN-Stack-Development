import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./app";
import ErrorPage from './pages/404';
import './styles.css';


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact={true}/>
      <Route path="/home" component={App} exact={true}/>

      <Route component={ErrorPage} />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById("root"));
