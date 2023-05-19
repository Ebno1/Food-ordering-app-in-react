import ReactDOM from "react-dom";
import React from "react";
import { useSelector } from "react-redux";

import classes from "./Ordered_modal.module.css";

import Card from "../UI/Card";
import Button from "../UI/Button";
import CartItem from "./CartItem";

const OrderedModal = (props) => {
  const cartState = useSelector((state) => state.cart);

  const closeModalHandler = () => {
    props.closeModal();
  };

  return (
    <Card className={classes.card}>
      {cartState.foodOrder.map((item) => {
        return (
          <CartItem key={item.Id} item={item} />
        );
      })}

      <div className={classes.bottom}>
        <div className={classes.total_price}>
          <p>Total Price</p>
          <p>${cartState.totalPrice}</p>
        </div>
        <div className={classes.c_and_o}>
          <Button onClick={closeModalHandler}>Close</Button>
          <Button>Order</Button>
        </div>
      </div>
    </Card>
  );
};

const Backdrop = (props) => {
  const closeBackdropHandler = () => {
    props.closeBackdrop();
  };

  return (
    <div onClick={closeBackdropHandler} className={classes.backdrop}></div>
  );
};

const CartList = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <OrderedModal closeModal={props.close} />,
        document.getElementById("cartLayout")
      )}
      {ReactDOM.createPortal(
        <Backdrop closeBackdrop={props.close} />,
        document.getElementById("backdrop")
      )}
    </React.Fragment>
  );
};

export default CartList;
