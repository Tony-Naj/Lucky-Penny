import "./App.css";
import React, { useState } from "react";
import DatePage from "./components/DatePage";
import DateForm from "./components/DateForm";
import Header from "./Header";
import History from "./components/History";
import AccessForm from "./components/AccessForm";
import HomePage from "./HomePage";
import { Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="/DatePage">
        <DatePage />
      </Route>
    </div>
  );
}

export default App;
