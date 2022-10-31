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
        <Card
          img="../images/bulbasaur.png"
          title="Bulbasaur"
          price={20}
          type="Grass/Poison"
          species="Seed Pokemon"
          height={0.7}
          weight={6.9}
          abilities="Overgrow"
        />
      </section>
    </div>
  );
}

export default App;
