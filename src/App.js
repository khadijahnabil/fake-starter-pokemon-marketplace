import React from "react";
import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">
        <Card />
      </section>
    </div>
  );
}

export default App;
