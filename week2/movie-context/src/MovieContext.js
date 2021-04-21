import React,{useState,createContext} from "react";
import MovieList from "./MovieList"

   
export const MyContext = createContext();

   export function MovieContext(props) {
         const [movies,setMovies]= useState([
      {
         name : 'Green Zone',
         Price : 25
      },
      {
         name : 'State Of Play',
         Price : 20
      },
      {
         name: 'PlayStation vs Xbox: The documentary',
         Price: 30
      },
      {
         name: 'Road Trip',
         Price: 15
      }
   ]);
 
   return (

      


      <MyContext.Provider value={[movies, setMovies]}>
         {props.children}
      </MyContext.Provider>

   
   )

   
}
export default MovieContext;