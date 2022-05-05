import React, { Component } from "react";
import { Routes, Route } from 'react-router-dom';

import Pokelist from './PokeList';
import Pokemon from './PokeList/Pokemon';

const Main = () => {
  return (
    <div>
      <h1>Web de Pokemons con React</h1>
      <Routes>
        <Route element={<Pokelist/>} path='/' />
        <Route element={<Pokemon/>} path='/' />
      </Routes>
    </div>
  )
}

export default Main;
