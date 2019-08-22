import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import Header from "./components/Header";
// import MobileHeader from './components/MobileHeader';
import Footer from "./components/Footer";
import Details from "./components/Details";

// import data from "./data/listingData";

import * as serviceWorker from "./serviceWorker";
const loader = document.querySelector(".loader");

// if you want to show the loader when React loads data again
const showLoader = () => loader.classList.remove("loader--hide");

const hideLoader = () => loader.classList.add("loader--hide");

const Index = () => {
  useEffect(() => hideLoader(), []);
  return (
    <Router>
      <Route path='/' component={Header} />
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/listing/:id" component={Details} />
      </Switch>
      <Footer />
    </Router>
  );
};

ReactDOM.render(
  <Index hideLoader={hideLoader} showLoader={showLoader} />,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
