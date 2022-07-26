import React from "react";
import "../css/ExpenseItem.css"; // Remember to import your CSS file!
import ExpenseDate from "./ExpenseDate";
import Card from "../Card/Card";

export default function ExpenseItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2> {props.title} </h2>
        </div>
        <div className="expense-item__price"> ${props.amount} </div>
      </Card>
    </li>
  );
}
