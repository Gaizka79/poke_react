import React from "react";

function PokemonCard(props) {

  const nombre=props.value.name;
  const foto = props.value.sprites.front_default;

  return (
    <div>
      <h2>{nombre}</h2>
      <img src={foto} alt="Foto Pokemon" />
    </div>
  )
}

export default PokemonCard;
