import React from 'react'
import Transaction from "./Transaction"
import uuid from "react-uuid";

export default function Transactions({transactions}) {
    return (
        <div className="">
        <section>
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Name</th>
                <th>Amount</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => {
                return <Transaction key={uuid()} transaction={transaction} index={index} />;
              })}
            </tbody>
          </table>
        </section>
      </div>
    )
}
