import React from "react";
import classes from "./HeaderCartButton.module.css";
const HeaderCartButton = (props) => {
  return (
    <button className={classes.button} onClick={props.onClick}>
      <span>Your Cart</span>
    </button>
  );
};
export default HeaderCartButton;
