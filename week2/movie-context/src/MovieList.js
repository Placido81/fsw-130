import React, { useContext } from "react"
import { render } from "react-dom"
import {MovieContext, MyContext} from "./MovieContext"


     function MovieList(){
         const [NewContext, setNewContext] = useContext(MyContext);
        return(
            <div>
            {
                NewContext.map((movies) => (
                    <React.Fragment>
                    <h3>* {movies.name} *</h3>
                    <p>$ {movies.Price}</p>
                    
                    </React.Fragment>
                ))
                
            
                    
        }

            </div>
        )

    }
    export default MovieList;   

