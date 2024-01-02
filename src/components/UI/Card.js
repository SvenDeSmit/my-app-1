import "./Card.css";

function Card(props) {
  // tick to take classes from components wrapped inside this component
  const classes = "card " + props.className;
  console.log(classes);
  return <div className={classes}>{props.children}</div>;
}

export default Card;
