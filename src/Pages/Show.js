import { useState } from "react";
import { useParams } from "react-router-dom";
import TransactionDetails from "../Components/TransactionDetails";

function Show({ deleteTransaction, transactions }) {
  let { id } = useParams();
  const [transaction] = useState(transactions[id]);
  return (
    <div className="Show">
      <h2>Show</h2>
      <section>
        <TransactionDetails
          transaction={transaction}
          id={id}
          deleteTransaction={deleteTransaction}
        />
      </section>
    </div>
  );
}

export default Show;
