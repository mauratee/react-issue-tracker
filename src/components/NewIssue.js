import React, { useState } from "react";
import './NewIssue.css'

function NewIssue(props) {
  const [enteredDescription, setEnteredDescription] = useState("");
  const [chosenPriority, setChosenPriority] = useState("");
  const [chosenDate, setChosenDate] = useState("");

  const descriptionChangeHandler = (evt) => {
    setEnteredDescription(evt.target.value);
  };
  const priorityChangeHandler = (evt) => {
    setChosenPriority(evt.target.value);
  };
  const dateChangeHandler = (evt) => {
    setChosenDate(evt.target.value);
  };

  const submitHandler = (evt) => {
    evt.preventDefault();

    const expenseData = {
        id: Math.random().toString(),
        description: enteredDescription,
        priority: chosenPriority,
        date: new Date(chosenDate),
    };
    props.onAddIssue(expenseData);
    setEnteredDescription('');
    setChosenPriority('');
    setChosenDate('');
  };

  return (
    <div className="new-issue">
      <form onSubmit={submitHandler}>
        <div>
          <label>Description</label>
          <input
            type="text"
            value={enteredDescription}
            onChange={descriptionChangeHandler}
          />
        </div>
        <div>
          <label for="priority">Priority</label>
          <select
            name="priority"
            id="priority"
            value={chosenPriority}
            onChange={priorityChangeHandler}
          >
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        <div>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={chosenDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div>
          <button type="submit">Add Issue</button>
        </div>
      </form>
    </div>
  );
}

export default NewIssue;
