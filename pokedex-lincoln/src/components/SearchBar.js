import React, {useState} from 'react'
import {searchPokemon} from './../functions/api'

const SearchBar = (props) =>{

    const [search, setSearch] = useState('')
    const {onSearh} = props

    
    const onChangeHandler = (e)=>{
        
        setSearch(e.target.value)
        if(e.target.value.length === 0){
            onSearh(undefined)
        }


    }

    const onButtonClickHandler = () =>{
        onSearh(search)

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
        

    </div>
)

}

export default SearchBar