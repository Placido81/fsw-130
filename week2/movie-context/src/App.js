
import React from 'react';
import MovieContext from "./MovieContext"
import MovieList from './MovieList'
import ChangeContext from "./ChangeContext"
import './App.css';

function App() {
  return (
   <div>
      
      <MovieContext>
      <ChangeContext />
      <MovieList />
      </MovieContext>
   </div>
  )
};


export default App;