import React from 'react'
import { Link } from "react-router-dom";

export default function Transaction({transaction, index, key}) {
    return (
        <tr>
        <td>
         {transaction.date}
        </td>

        <td>
         {transaction.name}
        </td>


        <td className={transaction.type === "credit" ? "green" : "red"}>
         {transaction.amount.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}
        </td>


        <td>
         {transaction.notes}
        </td>

{/* 
        <td>
          <a href={transaction.url} target="_blank" rel="noreferrer">
            {transaction.name}
          </a>
        </td>
        <td>
          <Link to={`/transactions/${index}`}>✏️</Link>
        </td> */}
      </tr>
    )
}
