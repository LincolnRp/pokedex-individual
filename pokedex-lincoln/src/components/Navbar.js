import React, {useContext} from "react";
import { Provider } from './../contexts/favoritesContext'

const Navbar = () => {
  // useContext(favoritePokemons) 
    const logoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  return (
    <nav>
      <div>
              <img
      alt='poke-logo'
      className='navbar-img'
      src={logoImg}
      ></img>
      </div>
      <div>
        {/* {favoritePokemons.length} */}
        ❤️
      </div>

    </nav>
  );
};
export default Navbar;
