import Card from "../Card/Card";
import "../css/ExpenseList.css";
import ExpenseItem from "./ExpenseItem";

export default function ExpenseList(props) {
  const expenseArr = props.expenses;
  return (
    <Card className="expenses">
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
  );
}
