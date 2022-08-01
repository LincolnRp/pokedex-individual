import React, {useState} from 'react'
import {searchPokemon} from './../functions/api'

const SearchBar = () =>{

    const [search, setSearch] = useState('')
    const [pokemon, setPokemon] = useState()

    const onChangeHandler = (e)=>{

        setSearch(e.target.value)


    }

    const onButtonClickHandler = () =>{
        onSearchHandler(search)

    }

    const onSearchHandler = async (pokemon) =>{
    const result = await searchPokemon(pokemon)
        setPokemon(result)
      
      
      
       }


return(
    <div className='searchbar-container'>
        <div className='searchbar'>
            <input placeholder='Buscar pokemon'
            type='text'
            onChange={onChangeHandler}/>
        </div>
        <div>
            <div className='searchbar-btn'>
                <button onClick={onButtonClickHandler}>Buscar</button>
            </div>
        </div>
        {pokemon ? (
        <div>

            <div>{pokemon.name}</div>
            <div>{pokemon.weight}</div>
            <img src={pokemon.sprites.front_default} alt={pokemon.name}/>

        </div>
            ) : null}

    </div>
)

}

export default SearchBar