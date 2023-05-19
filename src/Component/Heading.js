import classes from "./heading.module.css";
import Cart_Counter from "./Cart_Counter";
import Card from "./UI/Card";

const Heading = (props) => {
  return (
    <div className={classes.container}>
      <div className={classes.heading}>
        <h1>FoodSite</h1>
        <Cart_Counter openModal={props.openModal}/>
      </div>
      <Card className={classes.card}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at ante
        vestibulum, scelerisque felis efficitur, tincidunt sem. Aenean dui
        risus, mattis quis porta ac, tincidunt nec tellus. Vivamus varius turpis
        orci, nec vulputate odio dignissim ultrices. Donec maximus auctor
        luctus. Duis accumsan velit ac eleifend sollicitudin. Fusce congue
        consectetur viverra. Pellentesque congue euismod tellus nec consequat.
        Pellentesque rhoncus consequat urna, sed tincidunt odio posuere ac.
      </Card>
    </div>
  );
};

export default Heading;
