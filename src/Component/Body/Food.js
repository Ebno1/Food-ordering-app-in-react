import { IoIosAdd } from "react-icons/io";
import { useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { cartAction } from "../../redux/CartReducer";

import Button from "../UI/Button";
import classes from "./food.module.css";

const Food=(props)=>{
    const cartstate = useSelector(state => state.cart);
    const dispatch = useDispatch();

    const [ amount, setAmount ] = useState(1);

    const amountHandler=(e)=>{
        setAmount(+e.target.value);
    }

    const addToCartHandler=()=>{
        const addedFood = {...props.food, amount};
        dispatch(cartAction.addToCart(addedFood));
    }

    // console.log(cartstate)
    return(
        <div className={classes.container}>
            <div>
                <p className={classes.title}>{props.food.name}</p>
                <i>{props.food.description}</i>
                <p className={classes.price}>{`$${props.food.price}`}</p>
            </div>
            <div className={classes.right}>
                <div className={classes.inputForm}>
                    <label htmlFor="amount">Amount</label>
                    <input value={amount} onChange={amountHandler} type="number" min= '1' />
                </div>
                <Button onClick={addToCartHandler} className={classes.button}><IoIosAdd className={classes.add}/> Add</Button>
            </div>
        </div>
    )
}

export default Food;