import React,{useContext,useState} from  'react'
import {MyContext} from "./MovieContext";

function ChangeContext() {
    const [NewContext,setNewContext] =  useContext(MyContext);
    const [name,setName] = useState('');
    const [price,setPrice] = useState(0);
  const changeName=(event)=>{
    setName(event.target.value);
  }
  const changePrice= (event)=>{
      setPrice(event.target.value);
  }
    const changeValue = (event)=>{
        event.preventDefault();
        setNewContext(prevValue=> [...prevValue , {name : name, Price : price}]);
    }
    return (
        <div>
        <div className="container">
            <h1 className="Movename">The Movie Cinema</h1>
            <form>
                <input className='text' type='text' name='name' onChange={changeName} placeholder='Enter Movie Name'/>
                <input className='number' type='number' name='price' onChange={changePrice} placeholder='Enter Amount $'/>
                <button className="button" onClick={changeValue}>Press Enter</button>
            </form>
        </div>
        </div>
    )
}
export default ChangeContext;