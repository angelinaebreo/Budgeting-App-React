import React from 'react'
import { useState, useEffect } from "react";
import { useParams, Link, useHistory } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

export default function TransactionEditForm(props) {

    let { id } = useParams();
  let history = useHistory();

  const [transaction, setTransaction] = useState({});

  useEffect(() => {
    axios
      .get(`${API_BASE}/transactions/${id}`)
      .then((response) => {
        const { data } = response;
        console.log(data);
        setTransaction(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [id, history]);


  const handleTextChange = (event) => {
    setTransaction({ ...transaction, [event.target.id]: event.target.value });
    console.log(transaction)
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
        <div className="Edit">
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

      <Link to={`/transactions/${id}`}>
        <button>Cancel</button>
      </Link>
    </div>
    )
}
