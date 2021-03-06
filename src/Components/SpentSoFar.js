import React from "react";

export default function SpentSoFar({ totalSum }) {
  return (
    <div className="alert alert-primary p-4">
     
          {totalSum < 0 ? "Total expenses: " : "Positive balance: "} 
          {totalSum.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
    </div>
  );
}
