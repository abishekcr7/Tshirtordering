import CartItem from "./CartItem";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";




const Cart = (props) => {
let totalAmount = 0;
//   let totalItemAmount= 0;
//   props.item.map((item) => (
//     totalItemAmount=item.quantity*item.price
//     totalAmount=totalAmount+totalItemAmount
//   ));
  const hasItems = props.item;

  const cartItemRemovehandler = (id) => {};
  const cartItemAddhandler = (item) => {};

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {props.item.map((item) => (
       <CartItem
        name={item.tshirt}
        description={item.description}
        price={item.price}
        l={item.sizeL}
        m={item.sizeM}
        s={item.sizeS}
        totalAmount={totalAmount}
        onRemove={cartItemRemovehandler.bind(null,item.id)}
        onAdd={cartItemAddhandler.bind(null,item)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total amount</span>
        <span>${totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button} onClick={props.onClose}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;