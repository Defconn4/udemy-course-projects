import ExpenseList from "./components/Expenses/ExpenseList"; // Rememeber to import any custom components!

export default function App() {
  const items = [
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
      <ExpenseList expenses={items} />
    </div>
  );
}
