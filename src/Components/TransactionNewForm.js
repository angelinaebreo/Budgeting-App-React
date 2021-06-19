import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function TransactionNewForm(props) {
  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    type: "",
    amount: 0,
    notes: "",
  });

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: parseFloat(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.addTransaction(transaction);
    props.history.push("/transactions");
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          required
          value={transaction.date}
          placeholder="MM/DD/YYYY"
          onChange={handleTextChange}
        />

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={transaction.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name"
          required
        />

        <label htmlFor="from">From:</label>
        <input
          id="from"
          value={transaction.from}
          type="text"
          onChange={handleTextChange}
          placeholder="From"
          required
        />

        <label htmlFor="amount">Amount:</label>
        <input
          id="amount"
          type="number"
          name="amount"
          value={transaction.amount}
          placeholder="1,000,000"
          onChange={handleNumberChange}
          required
        />

        <label htmlFor="notes">Notes:</label>
        <textarea
          id="notes"
          name="notes"
          value={transaction.notes}
          onChange={handleTextChange}
          placeholder="Any notes for this transaction?"
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
