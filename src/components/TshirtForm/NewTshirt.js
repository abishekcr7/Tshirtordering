import React from 'react'
import HeaderForm from './HeaderForm';
const NewTshirt = (props) => {
    const saveTshirtDataHandler=(enteredTshirtData) =>{
      const tshirtdata={
        ...enteredTshirtData,
        id:Math.random().toString()
      }
      props.onAddTshirt(tshirtdata)
      
    }
   
    return (
      <div>
         <HeaderForm onSaveTshirtData={saveTshirtDataHandler}/>
      </div>
    );
}

export default NewTshirt;
