import { AiOutlineShoppingCart } from "react-icons/ai"
import Button from "./UI/Button";
import classes from './cart.module.css';
import { useSelector } from "react-redux";

const Cart_Counter=(props)=>{
    const selected = useSelector(state=>state.cart.totalSelected)
    return(
        <div onClick={props.openModal} className={classes.cont}>
            <AiOutlineShoppingCart className={classes.cartIcon} />
            <Button className={classes.button}>{selected}</Button>
        </div>
    )
}

export default Cart_Counter;