import { useState } from "react";
import Header from "./components/Layout/Header";
import NewTshirt from "./components/TshirtForm/NewTshirt";
import TshirtList from "./components/TshirtForm/TshirtList";
import Cart from "./components/Cart/Cart";

import "./App.css";

const Dummy_tshirt= [{
  tshirt: 'Armani',
  description: 'Armani Cotton',
  price: '30',
  sizeL: '2',
  sizeM: '2',
  sizeS: '2',
}]
function App() {
  const [tshirtList,setTshirtList]=useState(Dummy_tshirt)
  const addTshirtHandler = (tshirt) => {
    setTshirtList((prevTshirt) => {
      return [tshirt, ...prevTshirt]
    })
}

const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  };

  const hideCartHandler =()=>{
    setCartIsShown(false)
  }

  return (
    <>
      {cartIsShown && <Cart item={tshirtList} onClose={hideCartHandler} />}
      <Header onShowCart={showCartHandler}/>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <NewTshirt onAddTshirt={addTshirtHandler}/>
      <TshirtList item={tshirtList} />
      </>
    
    
  );
}

export default App;
