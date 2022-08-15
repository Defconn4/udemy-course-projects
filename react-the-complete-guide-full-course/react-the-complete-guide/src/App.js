import ExpenseItem from "./components/ExpenseItem"; // Rememeber to import any custom components!

export default function App() {
  const expenses = [
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
      date: new Date(2022, 7, 12),
    },
    {
      id: "e5",
      title: "Loan Payment",
      amount: 910.67,
      date: new Date(2022, 8, 1),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      />
      <ExpenseItem
        title={expenses[4].title}
        amount={expenses[4].amount}
        date={expenses[4].date}
      />
    </div>
  );
}
