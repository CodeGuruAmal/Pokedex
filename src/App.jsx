import React from "react";
import PokemonList from "./components/pokedex/PokemonList";
import { DetailProvider } from "./contexts/DetailContext";
import Navbar from "./components/pokedex/Navbar";
import SearchBar from "./components/pokedex/SearchBar";

const App = () => {
  return (
    <DetailProvider>
      <div>
        <Navbar/>
        <SearchBar/>
        <PokemonList />
      </div>
    </DetailProvider>
  );
};

export default App;
