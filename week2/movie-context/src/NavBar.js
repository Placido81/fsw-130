import React,{useContext} from "react";
import {MovieContext, MyContext} from "./MovieContext"
function NavBar(){
    const [NewContext,] = useContext(MyContext)
    return (
        <p>Length : {NewContext.length} </p>
    )
}
export default NavBar;
