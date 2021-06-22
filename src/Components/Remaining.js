import React from "react";

export default function Remaining({ budget, totalSum }) {
  const alertType = budget + totalSum <= 0 ? "alert-danger" : "alert-success";

  return (
    <div className={`alert p-4 ${alertType}`}>
      <span>
        Remaining:{" "}
        {(budget + totalSum).toLocaleString("en-US", {
          style: "currency",
          currency: "USD",
        })}
      </span>
    </div>
  );
}
