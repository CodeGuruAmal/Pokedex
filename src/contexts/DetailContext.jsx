import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DetailContext = createContext();

export const useDetail = () => useContext(DetailContext);

export const DetailProvider = ({children}) => {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
      axios
        .get("https://pokeapi.co/api/v2/pokemon?limit=30")
        .then((res) => {
          const fetchPokemonDetails = res.data.results.map((p) =>
            axios.get(p.url)
          );
  
          Promise.all(fetchPokemonDetails).then((response) =>
            setPokemon(response.map((p) => p.data))
          );
        })
        .catch((err) => console.log(err));
    }, []);


    return (
        <DetailContext.Provider value={{pokemon}}>
            {children}
        </DetailContext.Provider>
    )
}