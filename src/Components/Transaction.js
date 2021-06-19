import React from "react";
import { Link } from "react-router-dom";

export default function Transaction({ transaction, id }) {
  return (
    <tr>
      <th scope="row">{transaction.date}</th>

      <td>
        <Link to={`/transactions/${id}`}>{transaction.name}</Link>
      </td>

      <td>{transaction.from}</td>

      <td className={transaction.type === "credit" ? "green" : "red"}>
        {transaction.amount.toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </td>

      <td>{transaction.notes}</td>
    </tr>
  );
}
