import React, { useState } from "react";

import ExpenseList from "./components/Expenses/ExpenseList"; // Rememeber to import any custom components!
import NewExpense from "./components/NewExpense/NewExpense";
import "../src/components/css/ExpenseList.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2022, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2022, 7, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2022, 7, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 7, 12),
  },
  {
    id: "e5",
    title: "Loan Payment",
    amount: 910.67,
    date: new Date(2020, 8, 1),
  },
];

export default function App() {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <ul className="expenses-list">
        <ExpenseList expenses={expenses} />
      </ul>
    </div>
  );
}
