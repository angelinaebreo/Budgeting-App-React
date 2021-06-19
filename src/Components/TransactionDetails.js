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

    // let amount = transaction.amount.toLocaleString("en-US", {
    //   style: "currency",
    //   currency: "USD",
    // })

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Date</th>
            <th scope="col">Name</th>
            <th scope="col">From</th>
            <th scope="col">Amount</th>
            <th scope="col">Notes</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">{transaction.date}</th>
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
          <div class="row mt-3">
            <div class="col-sm">
              <Link to={`/transactions`}>
                <button class="btn btn-primary">Back</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div class="row mt-3">
            <div class="col-sm">
              <Link to={`/transactions/${id}/edit`}>
                <button class="btn btn-primary">Update</button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div class="row mt-3">
            <div class="col-sm">
              <button onClick={handleDelete} class="btn btn-primary">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default withRouter(TransactionDetails);
