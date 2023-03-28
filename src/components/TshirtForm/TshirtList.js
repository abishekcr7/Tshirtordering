import React from "react";
import ItemList from "../ItemList/ItemList";

const TshirtList = (props) => {
    
  return (
    <div>
      <p>This is Tshirt List</p>
      <ul>
        {props.item.map((item) => (
          <ItemList
            name={item.tshirt}
            description={item.description}
            price={item.price}
            l={item.sizeL}
            m={item.sizeM}
            s={item.sizeS}
          />
        ))}
      </ul>
    </div>
  );
};

export default TshirtList;
