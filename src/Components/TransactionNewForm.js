import React from "react";
import { useState } from "react";
import { withRouter } from "react-router-dom";

function TransactionNewForm(props) {
  const [transaction, setTransaction] = useState({
    name: "",
    date: "",
    from: "",
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
        <div className="row">
          <div className="col-sm col-lg-3">
            <label htmlFor="date">Date:</label>
            <input
              id="date"
              type="date"
              className="form-control"
              required
              value={transaction.date}
              placeholder="MM/DD/YYYY"
              onChange={handleTextChange}
            />
          </div>
          <div className="col-md col-lg-3">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={transaction.name}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              placeholder="Name"
              required
            />
          </div>
          <div className="col-sm col-lg-3">
            <label htmlFor="from">From:</label>
            <input
              id="from"
              value={transaction.from}
              type="text"
              className="form-control"
              onChange={handleTextChange}
              placeholder="From"
              required
            />
          </div>
          <div className="col-sm col-lg-3">
            <label htmlFor="amount">Amount:</label>
            <input
              id="amount"
              type="number"
              name="amount"
              step="0.01"
              className="form-control"
              value={transaction.amount}
              placeholder="1,000,000"
              onChange={handleNumberChange}
              required
            />
          </div>
          <div className="col-lg col-lg-12">
            <label htmlFor="notes">Notes:</label>
            <textarea
              id="notes"
              name="notes"
              className="form-control"
              value={transaction.notes}
              onChange={handleTextChange}
              placeholder="Any notes for this transaction?"
            />

            <div className="row mt-3">
              <div className="col-sm">
                <input type="submit" className="btn btn-primary" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default withRouter(TransactionNewForm);
