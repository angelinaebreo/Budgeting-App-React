import React from "react";

export default function Remaining({ budget, transactions }) {
  const total = transactions.reduce((a, b) => a + parseFloat(b.amount), 0);

  const alertType = (budget + total) < 0 ? "alert-danger" : "alert-success";


  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>
        Remaining:{" "}
        {(budget + total).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </div>
  );
}