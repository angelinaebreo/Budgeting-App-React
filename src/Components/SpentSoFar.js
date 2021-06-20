import React from "react";

export default function SpentSoFar({ transactions }) {
  const total = transactions.reduce((a, b) => a + parseFloat(b.amount), 0);

  return (
    <div className="alert alert-primary p-4">
      Spent so far:{" "}
      {total.toLocaleString("en-US", {
        style: "currency",
        currency: "USD",
      })}
    </div>
  );
}
