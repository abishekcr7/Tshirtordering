import React, { useState } from "react";
import "./Header.css";


const HeaderForm = (props) => {
  const [enteredTshirt, setEnteredTshirt] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredPrice, setEnteredPrice] = useState();
  const [enteredL, setEnteredL] = useState();
  const [enteredM, setEnteredM] = useState();
  const [enteredS, setEnteredS] = useState();

  const outputTshirt = (event) => {
    setEnteredTshirt(event.target.value);
  };

  const outputDescription = (event) => {
    setEnteredDescription(event.target.value);
  };

  const outputPrice = (event) => {
    setEnteredPrice(event.target.value);
  };

  const outputL = (event) => {
    setEnteredL(event.target.value);
  };

  const outputM = (event) => {
    setEnteredM(event.target.value);
  };

  const outputS = (event) => {
    setEnteredS(event.target.value);
  };
  

  const submitHandler = (event) => {
    event.preventDefault();
    const tshirtDetails = {
      tshirt: enteredTshirt,
      description: enteredDescription,
      price: enteredPrice,
      sizeL: enteredL,
      sizeM: enteredM,
      sizeS: enteredS,
    }
    props.onSaveTshirtData(tshirtDetails)
    console.log(tshirtDetails)
    setEnteredDescription("");
    setEnteredL("");
    setEnteredM("");
    setEnteredPrice("");
    setEnteredTshirt("");
    setEnteredS("");
  };

  return (
    <div>
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Tshirt Name</label>
          <input
            type="text"
            value={enteredTshirt}
            id="tshirt"
            onChange={outputTshirt}
          />
        </div>
        <div className="new-expense__control">
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            id="description"
            onChange={outputDescription}
          />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input
            type="number"
            id="price"
            value={enteredPrice}
            onChange={outputPrice}
          />
        </div>
        <div className="new-expense__controls">
          <label >Quantity Available</label>
          <div className="new-expense__control">
            <label>L</label>
            <input type="number" id="L" onChange={outputL} value={enteredL} />
          </div>
          <div className="new-expense__control">
            <label>M</label>
            <input type="number" id="M" onChange={outputM} value={enteredM} />
          </div>
          <div className="new-expense__control">
            <label>S</label>
            <input type="number" id="S" onChange={outputS} value={enteredS} />
          </div>
        </div>
       
       <div className="new-expense__actions">
        <button type="submit" className="button" >Add product</button>
      </div>
      </div>
    </form>
    </div>
  );
};

export default HeaderForm;
