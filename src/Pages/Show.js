import { useState } from "react";
import { useParams } from "react-router-dom";
import TransactionDetails from "../Components/TransactionDetails";

function Show({ deleteTransaction, transactions }) {
  let { index } = useParams();
  const [transaction] = useState(transactions[index]);
  return (
    <div className="Show">
      <h2>Show</h2>
      <section>
        <TransactionDetails
          transaction={transaction}
          index={index}
          deleteTransaction={deleteTransaction}
        />
      </section>
    </div>
  );
}

export default Show;
