import { useDispatch } from "react-redux";

import classes from "./Ordered_modal.module.css";
import Button from "../UI/Button";
import { cartAction } from "../../redux/CartReducer";

const CartItem=(props)=>{

    const dispatch = useDispatch();
    const food = {...props.item, amount: 1};

    const addHandler = () => {
        dispatch(cartAction.addToCart(food))
    }

    const removeHandler = () => {
        dispatch(cartAction.removeFromCart(food))
    }

    return (
        <div className={classes.foodlist}>
            <div>
              <p className={classes.foodname}>{props.item.name}</p>
              <div className={classes.p_and_q}>
                <p>${props.item.price}</p>
                <p>X {props.item.amount}</p>
              </div>
            </div>
            <div className={classes.button}>
              <Button onClick={addHandler}>+</Button>
              <Button onClick={removeHandler}>-</Button>
            </div>
          </div>
    )
}

export default CartItem;