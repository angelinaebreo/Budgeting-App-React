import React from "react";
import Transaction from "./Transaction";
import uuid from "react-uuid";

export default function Transactions({ transactions }) {
  return (
    <div className="">
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Name</th>
              <th scope="col">From</th>
              <th scope="col">Amount</th>
              <th scope="col">Notes</th>
            </tr>
          </thead>
          <tbody>
            {transactions &&
              transactions.map((transaction, id) => {
                return (
                  <Transaction key={uuid()} transaction={transaction} id={id} />
                );
              })}
          </tbody>
        </table>
      </section>
    </div>
  );
}
