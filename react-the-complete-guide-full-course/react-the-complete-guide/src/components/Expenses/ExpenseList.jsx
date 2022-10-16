import React, { useState } from "react";
import Card from "../Card/Card";
import "../css/ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

export default function ExpenseList(props) {
  const [filterYear, setFilterYear] = useState("2020");
  const expenseArr = props.expenses;
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onChangeFilter={setFilterYear}
        />
        {expenseArr.map((expense) => {
          return (
            <div key={expense.id}>
              <ExpenseItem
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
              />
            </div>
          );
        })}
      </Card>
    </div>
  );
}
