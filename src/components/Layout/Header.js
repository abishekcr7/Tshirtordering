import React from "react";
//import "./Header.css";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
import { Fragment } from "react";

const Header = (props) => {
  return (
    <div>
      <header className={classes.header}>
        <h1>Tshirt Store</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
      </header>
    </div>
  );
};

export default Header;
