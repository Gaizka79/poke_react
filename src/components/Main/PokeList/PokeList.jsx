import React, { useState, useEffect } from "react";
import axios from 'axios';
import PokemonCard from './Pokemon/Pokemon';

function PokeList ()  {
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    if (input) {
      const getApi = async () => {
        try{
          const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${input}`);
          const data = await res.data;
          console.log(data);
          console.log(pokemon);
          setPokemon([...pokemon,data]);
          console.log(pokemon);
        }catch(error) {
          throw error;
        }
      }
      getApi();
    }
  },[input]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setInput(event.target.pokemon.value.toLowerCase());
    event.target.value = '';
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="pokemon">Introduce un Pokemon: </label><br />
        <input type="text" id="pokemon" name="pokemon" placeholder="Nombre o número de Pokemon..."/>

        <button type="submit">Buscar Pokemon</button>
        <button onClick={()=> console.log(input)}>ver input</button>
      </form>
      <div>
        {pokemon == [] ? ""
        : pokemon.map((poke, i) => <PokemonCard key={i} value={poke} />)
        }
      </div>
    </section>
  )
}

export default PokeList;
//<input onChange={updateInput} type="text" id="pokemon" name="pokemon" placeholder="Nombre o número de Pokemon..."/>