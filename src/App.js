import React from "react";
import { Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./App.scss";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
      <Footer />
    </>
  );
};

export default App;
