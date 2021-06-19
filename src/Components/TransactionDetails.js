import React from "react";
import { useState, useEffect } from "react";
import { Link, useParams, useHistory, withRouter } from "react-router-dom";
import axios from "axios";
import { apiURL } from "../util/apiURL";

const API_BASE = apiURL();

function TransactionDetails(props) {
  const { deleteTransaction } = props;
  const [transaction, setTransaction] = useState([]);

  let { id } = useParams();
  let history = useHistory();

  useEffect(() => {
    axios
      .get(`${API_BASE}/transactions/${id}`)
      .then((response) => {
        const { data } = response;
   
        setTransaction(data);
      })
      .catch((e) => {
        history.push("/not-found");
      });
  }, [id, history]);

  const handleDelete = () => {
    deleteTransaction(id);
    history.push("/transactions");
  };

//   let amount = transaction.amount.toLocaleString("en-US", {
//     style: "currency",
//     currency: "USD",
//   })

  return (
    <div>
      <table className="transaction-details">
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>From</th>
            <th>Amount</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{transaction.date}</td>
            <td>{transaction.name}</td>
            <td>{transaction.from}</td>
            <td className={transaction.type === "credit" ? "green" : "red"}>
              {/* {transaction.amount.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })} */}

              {transaction.amount}
            </td>

            <td>{transaction.notes}</td>
          </tr>
        </tbody>
      </table>
<hr />
      <div className="showNavigation">
        <div>
          {" "}
          <Link to={`/transactions`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          {" "}
          <Link to={`/transactions/${id}/edit`}>
            <button>Update</button>
          </Link>
        </div>
        <div>
          {" "}
          <button onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
}
export default withRouter(TransactionDetails);
