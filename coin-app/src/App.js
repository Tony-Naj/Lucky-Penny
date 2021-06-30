import "./App.css";
import React, { useState } from "react";
import DatePage from "./components/DatePage";
import Header from "./Header";
import HomePage from "./HomePage";
import { Route } from "react-router-dom";

function App() {
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);

  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <HomePage
          events={events}
          births={births}
          setEvents={setEvents}
          setBirths={setBirths}
        />
      </Route>

      <Route path="/DatePage">
        <DatePage events={events} births={births} />
      </Route>
    </div>
  );
}

export default App;
