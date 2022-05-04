import React, { Component } from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/new'>Nuevo Pokemon</Link>
      <Link to='/pokemon/:id'>Detalles</Link>
      <Link to='/search'>Buscar</Link>
    </nav>
  )
}

export default Nav;
