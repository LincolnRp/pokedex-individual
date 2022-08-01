import React from "react";

const Navbar = () => {

    const logoImg = 'https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png'

  return (
    <nav>
      <img
      alt='poke-logo'
      className='navbar-img'
      src={logoImg}
      ></img>
    </nav>
  );
};
export default Navbar;
