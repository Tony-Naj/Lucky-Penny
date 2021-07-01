import "./App.css";
import React, { useState } from "react";
import DatePage from "./components/DatePage";
import Header from "./Header";
import HomePage from "./HomePage";
import History from "./components/History";
import { Route } from "react-router-dom";

function App() {
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [date, setDate] = useState();
  // const [year, setYear] = useState()

  return (
    <div className="App">
      <Header />

      <Route exact path="/">
        <HomePage
          events={events}
          setEvents={setEvents}
          births={births}
          setBirths={setBirths}
          date={date}
          setDate={setDate}
        />
      </Route>

      <Route path="/DatePage">
        <DatePage
          events={events}
          births={births}
          date={date}
          // year={year}
          // setYear={setYear}
        />
      </Route>

      <Route path="/History">
        <History /*year={year}*/ />
      </Route>
    </div>
  );
}

export default App;
