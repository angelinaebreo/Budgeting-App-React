import React from "react";
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

export default function TransactionEditForm(props) {
  let { id } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({
    name: "",
    from: "",
    date: "",
    amount: 0,
    notes: "",
  });

  useEffect(() => {
    axios
      .get(`${API_BASE}/transactions/${id}`)
      .then((response) => {
        const { data } = response;
        setTransaction(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [id, history]);

  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
    console.log(transaction);
  };

  const handleNumberChange = (event) => {
    setTransaction({
      ...transaction,
      [event.target.id]: parseFloat(event.target.value),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.updateTransaction(transaction, id);
    history.push(`/transactions/${id}`);
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
          <div className="col-sm col-lg-3">
            <label htmlFor="name">Name:</label>
            <input
              id="name"
              value={transaction.name}
              className="form-control"
              type="text"
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
              className="form-control"
              type="text"
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
          </div>

          <div className="row mt-3">
            <div className="col-sm">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </div>
      </form>

      <div className="row mt-3">
        <Link to={`/transactions/${id}`}>
          <button className="btn btn-primary">Cancel</button>
        </Link>
      </div>
    </div>
  );
}
