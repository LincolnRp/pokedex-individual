import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Pokedex from "./components/Pokedex";
import SearchBar from "./components/SearchBar";
import {Provider} from "./contexts/favoritesContext";
import { getPokemons, getPokemonsData, searchPokemon } from "./functions/api";
import style from "./style/App.css";

const pokemonsLocal = 'undefined'
function App() {
  const [loading, setLoading] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);
  const itensPerPage = 25
  const [favorites, setFavorites] = useState([])

  const fetchPokemons = async () => {
    try {
      setLoading(true);
      setNotFound(false)
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

  const loadFavoritePokemons = () =>{
    const pokemonsfavs = JSON.parse(window.localStorage.getItem(pokemonsLocal)) || []
    setFavorites(pokemonsfavs)

  }

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  useEffect(() => {
    fetchPokemons();
  }, [page]);

  const updateFavoritePokemons = (name) =>{
    const updateFavorites = [...favorites]
    const favoriteIndex = favorites.indexOf(name)
    if(favoriteIndex >= 0) {
      updateFavorites.splice(favoriteIndex, 1)
    }else{
      updateFavorites.push(name)
    }
    window.localStorage.setItem(pokemonsLocal, JSON.stringify(updateFavorites))
    setFavorites(updateFavorites)

  }

  const values = {
    favoritePokemons: favorites,
      updateFavoritePokemons: updateFavoritePokemons,
  }

  const onSearhHandler = async (pokemon) =>{
    if(!pokemon){
     return fetchPokemons()
    }

    setLoading(true)
    setNotFound(false)
    const result = await searchPokemon(pokemon)
    if(!result){
      
    setLoading(false)
    setNotFound(true)

    }else {
      setPokemons([result])
      setPage(0)
      setTotalPage(1)
    }
    setLoading(false)
  }

  return (

    <Provider value={values}>
    <div className="App">
      <Navbar />
      <SearchBar onSearh={onSearhHandler} />
      {notFound ? (<div className="not-found-div">Sem Pokémons</div>) : 
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        totalPages={totalPages}
        setPage={setPage}
      />
    }</div>
     </Provider>
  );
}

export default App;
