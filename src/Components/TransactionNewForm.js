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
    <div>
      <form onSubmit={handleSubmit}>
        <div class="row">
          <div class="col-sm col-lg-4">
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              type="date"
              class="form-control"
              required
              value={transaction.date}
              placeholder="MM/DD/YYYY"
              onChange={handleTextChange}
            />
          </div>
          <div class="col-md col-lg-4">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={transaction.name}
              type="text"
              class="form-control"
              onChange={handleTextChange}
              placeholder="Name"
              required
            />
          </div>
          <div class="col-sm col-lg-4">
            <label htmlFor="from">From:</label>
            <input
              id="from"
              value={transaction.from}
              type="text"
              class="form-control"
              onChange={handleTextChange}
              placeholder="From"
              required
            />
          </div>
          <div class="col-sm col-lg-4">
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              type="number"
              name="amount"
              class="form-control"
              value={transaction.amount}
              placeholder="1,000,000"
              onChange={handleNumberChange}
              required
            />
          </div>
          <div class="col-lg col-lg-4">
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              class="form-control"
              value={transaction.notes}
              onChange={handleTextChange}
              placeholder="Any notes for this transaction?"
            />

            <div class="row mt-3">
              <div class="col-sm">
                <input type="submit" class="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
