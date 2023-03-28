import React,{ useEffect, useState } from "react";


const ItemList = (props) => {
    
    const [availableL,setAvailableL]=useState(props.l)
    const [availableM,setAvailableM]=useState(props.m)
    const [availableS,setAvailableS]=useState(props.s)
    
    useEffect(()=>{

        setAvailableL(props.l)
        setAvailableM(props.m)
        setAvailableS(props.s)
    },[props.m,props.l,props.s])

    console.log(props.l);
    console.log(props.m);
    console.log(props.s);
    

    const addL= ()=>{
        if(availableL <= 0){
            alert("No Tshirt available in selected size")
        }
        else{
            setAvailableL(availableL-1)
        }
    }
    const addM= ()=>{
            if(availableM <= 0){
                alert("No Tshirt available in selected size")
            }
            else{
                setAvailableM(availableM-1)
            } 
    }
    const addS= ()=>{
        if(availableS <= 0){
            alert("No Tshirt available in selected size")
        }
        else{
            setAvailableS(availableS-1)
        } 
}
    
  return (
    <div>
      <li>
        {props.name} ------{props.description} ------ Price:{props.price} ----
        <button onClick={addL}>Buy L {availableL}</button>----<button onClick={addM}>Buy M {availableM}</button>----
        <button onClick={addS}>Buy S {availableS}</button>
    
        
      </li>
    </div>
  );
};

export default ItemList;
