import { PokemonsTypes } from "../../Style/Type/TypePokemonStyled";
import React from "react";

function TypeOfPokemon(props) {
  let mapTypeProps = props.map((type) => {
    switch (type.type.name) {
      case "grass":
        return <PokemonsTypes color={"#76A866"}>Grass</PokemonsTypes>;

      case "fire":
        return <PokemonsTypes color={"#fd7d24"}>Fire</PokemonsTypes>;

      case "water":
        return <PokemonsTypes color={"#71C3FF"}>Water</PokemonsTypes>;

      case "bug":
        return <PokemonsTypes color={"#316520"}>Bug</PokemonsTypes>;

      case "normal":
        return <PokemonsTypes color={"#8A8A8A"}>Normal</PokemonsTypes>;

      case "flying":
        return <PokemonsTypes color={"#b2babd"}>Flying</PokemonsTypes>;

      case "poison":
        return <PokemonsTypes color={"#b97fc9"}>Poison</PokemonsTypes>;

      case "ground":
        return <PokemonsTypes color={"#BF9762"}>Ground</PokemonsTypes>;

      case "fairy":
        return <PokemonsTypes color={"#CE4069"}>Fairy</PokemonsTypes>;

      case "electric":
        return <PokemonsTypes color={"#F4D23B"}>Eletric</PokemonsTypes>;

      case "fighting":
        return <PokemonsTypes color={"#CE4069"}>Fighting</PokemonsTypes>;

      case "psychic":
        return <PokemonsTypes color={"#F67176"}>Psychic</PokemonsTypes>;

      case "dark":
        return <PokemonsTypes color={"#5C5365"}>Dark</PokemonsTypes>;

      case "rock":
        return <PokemonsTypes color={"#C7B78B"}>Rock</PokemonsTypes>;

      case "ghost":
        return <PokemonsTypes color={"#5269AC"}>Ghost</PokemonsTypes>;

      case "dragon":
        return <PokemonsTypes color={"#0A6CBF"}>Dragon</PokemonsTypes>;

      case "steel":
        return <PokemonsTypes color={"#BBBBBB"}>Steel</PokemonsTypes>;

      case "ice":
        return <PokemonsTypes color={"#74CEC0"}>Ice</PokemonsTypes>;
    }
  });

  return <PokemonsTypes>{mapTypeProps}</PokemonsTypes>;
}

export default TypeOfPokemon;