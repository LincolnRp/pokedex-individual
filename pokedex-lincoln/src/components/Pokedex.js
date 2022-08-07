import React from "react";
import Pagination from "./Pagination";
import Pokemons from './Pokemon'

const Pokedex = (props) => {
  const { pokemons, loading, page, totalPages, setPage } = props;

  const onLeftClickHandler = () =>{

   if(page > 0){

    setPage(page-1)

   }


  }

  const onRightClickHandler = () =>{

    if(page+1 !== totalPages ){

      setPage(page+1)

    }

  }


  return (
    <div>
      <div className="pokedex-header">
        <h1>Pokedex</h1>
        <Pagination
        page={page+1}
        totalPages={totalPages}
        onLeftClick={onLeftClickHandler}
        onRightClick={onRightClickHandler}
        />
      </div>
      {loading ? (
        <div className="loading-pokemon">Carregando pokémons</div>
      ) : (
        <div className="pokedex-grid">
            {pokemons && pokemons.map((pokemon, index)=>{
        return (
            <Pokemons key={index} pokemon={pokemon}/>
        )


            })}
        </div>
      )} 
    </div>
  );
};

export default Pokedex;
