import "./ExpenseItem.css"; // Remember to import your CSS file!

export default function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-us", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{day}</div>
        <div>{year}</div>
      </div>
      <div> {props.date.toISOString()} </div>
      <div className="expense-item__description">
        <h2> {props.title} </h2>
      </div>
      <div className="expense-item__price"> ${props.amount} </div>
    </div>
  );
}
