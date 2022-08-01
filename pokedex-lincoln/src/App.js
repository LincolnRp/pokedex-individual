import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import {Provider} from "./contexts/favoritesContext";
import { getPokemons, getPokemonsData } from "./functions/api";
import style from "./style/App.css";

function App() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const itensPerPage = 25
  const [favorites, setFavorites] = useState([])

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

  const updateFavoritePokemons = (name) =>{
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updateFavorites.slice(favoriteIndex, 1)
    }else{
      updateFavorites.push(name)
    }

    setFavorites(updateFavorites)

  }

  return (

    <Provider
    value={{
      favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons,
    }}
  >
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
     </Provider>
  );
}

export default App;
