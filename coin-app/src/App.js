import "./App.css";
import React, { useState } from "react";
import DatePage from "./components/DatePage";
import Header from "./Header";
import HomePage from "./HomePage";
import History from "./components/History";
// import CheckoutForm from "./components/CheckoutForm";

import { Route } from "react-router-dom";
// import { loadStripe } from "@stripe/stripe-js";
// import { Elements } from "@stripe/react-stripe-js";

// const promise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

function App() {
  const [events, setEvents] = useState([]);
  const [births, setBirths] = useState([]);
  const [date, setDate] = useState();

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
        <DatePage events={events} births={births} date={date} />
      </Route>

      <Route path="/History">
        <History />
      </Route>

      {/* <Elements stripe={promise}>
        <CheckoutForm />
      </Elements> */}
    </div>
  );
}

export default App;
