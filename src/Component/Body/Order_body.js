import Card from "../UI/Card";
import classes from './orderbody.module.css';
import { food_list } from "../Data";
import Food from "./Food";

const Order_body=()=>{
    return (
        <Card className={classes.card}>
            {food_list.map((item)=> <Food key={item.Id} food={item} />)}
        </Card>
    )
}

export default Order_body;