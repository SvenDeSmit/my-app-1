import { useState } from "react";
import React from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  /* OPTION 2 - DIFFERENT STATES for each var */

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const inputChangeHandler = (id, value) => {
    console.log("change: " + id + " , " + value);
    if (id === "title") {
      setEnteredTitle(value);
    } else if (id === "amount") {
      setEnteredAmount(value);
    } else {
      setEnteredDate(value);
    }
  };

  const submitHandler = (event) => {
    // avoid page reload when the button is clicked
    event.preventDefault();
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate), // parsed data string
    };
    console.log(expenseData);
    // callback to parent component - to pass result data
    props.onSaveExpenseData(expenseData);
    // reset form values after submit
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input
            type="text"
            // part opf 2-way binding
            value={enteredTitle}
            // call generic handler function
            onChange={(event) =>
              inputChangeHandler("title", event.target.value)
            }
          />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={(event) =>
              inputChangeHandler("amount", event.target.value)
            }
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            min="2023-01-01"
            max="2025-12-31"
            onChange={(event) => inputChangeHandler("date", event.target.value)}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );

  /* OPTION 1 - DIFFERENT STATES for each var */
  /*

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    setEnteredDate(event.target.value);
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
  */

  /* OPTION 3 - DIFFERENT  vars in a single object */
  /*

  const [userInput, setUserInput] = useState({
    inputTitle: "",
    inputAmount: "",
    inputDate: "",
  });

  const titleChangeHandler = (event) => {
    console.log(event.target.value);
    // setUserInput({ ...userInput, inputTitle: event.target.value });
    // Function execution guarantees that the prevState is the freshest one (scheduled mechanism to do state updates)
    setUserInput((prevState) => {
      return { ...prevState, inputTitle: event.target.value };
    });
  };

  const amountChangeHandler = (event) => {
    console.log(event.target.value);
    // setUserInput({ ...userInput, inputAmount: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, inputAmount: event.target.value };
    });
  };

  const dateChangeHandler = (event) => {
    console.log(event.target.value);
    // setUserInput({ ...userInput, inputDate: event.target.value });
    setUserInput((prevState) => {
      return { ...prevState, inputDate: event.target.value };
    });
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__controls">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__controls">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__controls">
          <label>Date</label>
          <input
            type="date"
            min="2023-01-01"
            max="2025-12-31"
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
  */
};

export default ExpenseForm;
