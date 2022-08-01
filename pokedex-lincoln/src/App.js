import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import { getPokemons, getPokemonsData } from "./functions/api";
import style from "./style/App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const itensPerPage = 25


  const fetchPokemons = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(itensPerPage, itensPerPage * page );
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonsData(pokemon.url); 
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false); 
      setTotalPage(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error:", error);
    }
  };

  useEffect(() => {
    console.log("carregou");
    fetchPokemons();
  }, [page]);

  return (
    <div className="App">
      <Navbar />
      <SearchBar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    </div>
  );
}

export default App;
