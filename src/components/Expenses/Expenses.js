import React, { useState } from "react";

import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";

function Expenses(props) {
  const items = props.items;

  const [yearFilter, setYearFilter] = useState("2020");
  // const [filterInfoText, setfilterInfoText] = useState("2019, 2021 & 2022");

  let filterInfoText = "2019, 2021 & 2022";
  const yearList = ["2019", "2020", "2021", "2022"];

  const calculateFilterYearString = (year) => {
    const filteredYearList = yearList.filter((year) => year != yearFilter);
    //console.log(filteredYearList);
    // array to string with separator ,
    let resText = filteredYearList.join(" , ");
    //console.log(resText);
    // replace last , by &
    var pos = resText.lastIndexOf(",");
    //console.log(pos);
    const arr = resText.split("");
    arr.splice(pos, 1, "&");
    resText = arr.join("");
    return resText;
  };

  filterInfoText = calculateFilterYearString(yearList);
  console.log(filterInfoText);

  const filterSelectionChangeHandler = (year) => {
    console.log(year);
    setYearFilter(year);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={yearFilter}
          onFilterSelectionChange={filterSelectionChangeHandler}
        ></ExpensesFilter>
        <p>Data for years {filterInfoText} is hidden</p>
        <ExpenseItem
          title={items[0].title}
          amount={items[0].amount}
          date={items[0].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[1].title}
          amount={items[1].amount}
          date={items[1].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[2].title}
          amount={items[2].amount}
          date={items[2].date}
        ></ExpenseItem>
        <ExpenseItem
          title={items[3].title}
          amount={items[3].amount}
          date={items[3].date}
        ></ExpenseItem>{" "}
      </Card>
    </div>
  );
}

export default Expenses;
