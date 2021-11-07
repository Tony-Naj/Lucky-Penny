import "./App.css";
import React, { useState } from "react";
import DatePage from "./components/DatePage";
import Navbar from "./Navbar.js";
import HomePage from "./HomePage";
import History from "./components/History";
// import CheckoutForm from "./components/CheckoutForm";

import { Route } from "react-router-dom";
import Steel from "./components/years/Steel";
import Indian from "./components/years/Indian";
import Wheat from "./components/years/Wheat";
import Memorial from "./components/years/Memorial";
import Bicentennial from "./components/years/Bicentennial";
import Shield from "./components/years/Shield";
import Confirmation from "./components/Confirmation";
import Superstitions from "./components/Superstitions";
import Scroll from "./Scroll.js";

function App() {
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [date, setDate] = useState();

  return (
    <div className="App">
      <Scroll />
      <Navbar />

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
        <DatePage events={events} births={births} date={date} />
      </Route>

      <Route path="/History">
        <History />
      </Route>

      <Route path="/Superstitions">
        <Superstitions />
      </Route>
      <Route path="/Steel">
        <Steel />
      </Route>

      <Route path="/Indian">
        <Indian />
      </Route>

      <Route path="/Wheat">
        <Wheat />
      </Route>

      <Route path="/Memorial">
        <Memorial />
      </Route>

      <Route path="/BiCentennial">
        <Bicentennial />
      </Route>

      <Route path="/Shield">
        <Shield />
      </Route>

      <Route path="/Confirmation">
        <Confirmation />
      </Route>

      {/* <Elements stripe={promise}>
        <CheckoutForm />
      </Elements> */}
    </div>
  );
}

export default App;
