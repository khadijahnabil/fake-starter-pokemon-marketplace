import React from "react";
import "./App.css";

import Navbar from "./Navbar";
import Hero from "./Hero";
import Card from "./Card";
import pokemonData from "./pokemonData";

function App() {
  const Cards = pokemonData.map((item) => {
    return (
      <Card
        key={item.id}
        img={item.img}
        title={item.title}
        price={item.price}
        type={item.stats.type}
        species={item.stats.species}
        height={item.stats.height}
        weight={item.stats.weight}
        abilities={item.stats.abilities}
      />
    );
  });
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className="cards-list">{Cards}</section>
    </div>
  );
}

export default App;
