import React, { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const DetailContext = createContext();

export const useDetail = () => useContext(DetailContext);

export const DetailProvider = ({children}) => {

    const [pokemon, setPokemon] = useState([]);
    const [offset, setOffset] = useState(0);

    useEffect(() => {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}`)
        .then((res) => {
          const fetchPokemonDetails = res.data.results.map((p) =>
            axios.get(p.url)
          );
  
          Promise.all(fetchPokemonDetails).then((response) =>
            setPokemon(prev => [...prev, ...response.map((p) => p.data)])
          );
        })
        .catch((err) => console.log(err));
    }, [offset]);

const handleScroll = () => {
  if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
    setOffset(prev => prev + 20);
  }
  
}
    useEffect(() => {
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <DetailContext.Provider value={{pokemon}}>
            {children}
        </DetailContext.Provider>
    )
}