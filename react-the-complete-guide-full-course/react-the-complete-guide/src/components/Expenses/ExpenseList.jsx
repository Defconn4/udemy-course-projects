import React, { useState } from "react";
import Card from "../Card/Card";
import "../css/ExpenseList.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseChart from "./ExpenseChart";

export default function ExpenseList(props) {
  const [filterYear, setFilterYear] = useState("2022");
  const expenseArr = props.expenses;

  const filteredExpenses = expenseArr.filter((expense) => {
    return expense.date.getFullYear().toString() === filterYear;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          filterYear={filterYear}
          onChangeFilter={setFilterYear}
        />
        <ExpenseChart expenses={filteredExpenses} />
        {filteredExpenses.length !== 0 ? (
          filteredExpenses.map((expense) => {
            return (
              <ExpenseItem
                key={expense.id}
                date={expense.date}
                title={expense.title}
                amount={expense.amount}
              />
            );
          })
        ) : (
          <h2 className="expenses-list__fallback">Found no expenses.</h2>
        )}
      </Card>
    </div>
  );
}
