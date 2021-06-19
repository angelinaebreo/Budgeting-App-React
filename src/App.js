import "./App.css";

import { useState, useEffect } from "react";

import { Router, Switch, Route } from "react-router-dom";
import { apiURL } from "./util/apiURL";
import axios from "axios";

import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

import Navbar from "./Components/Navbar";

const API_BASE = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE}/transactions`).then((response) => {
      console.log(response);
      const { data } = response;
      setTransactions(data);
    });
  }, []);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API_BASE}/transactions`, newTransaction)
      .then(
        (response) => {
          return axios.get(`${API_BASE}/transactions`);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
  };
  const deleteTransaction = (id) => {
    axios
      .delete(`${API_BASE}/transactions/${id}`)
      .then(
        (response) => {
          setTransactions(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  const updateTransaction = (updatedTransaction, id) => {
    console.log("update", updatedTransaction)
    console.log("id", id)
    axios
      .put(`${API_BASE}/transactions/${id}`, updatedTransaction)
      .then(
        (response) => {
          setTransactions(response.data);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
  };

  return (
    <div className="App">
      {/* <Router> */}
      <Navbar />
      <main>
        <Switch>
          <Route exact path="/">
            {" "}
            <Home />{" "}
          </Route>

          <Route path="/transactions/new">
            {" "}
            <New addTransaction={addTransaction} />{" "}
          </Route>

          <Route path="/transactions/:id/edit">
            {" "}
            <Edit
              transactions={transactions}
              updateTransaction={updateTransaction}
            />{" "}
          </Route>

          <Route path="/transactions/:id">
            {" "}
            <Show
              transactions={transactions}
              deleteTransaction={deleteTransaction}
            />{" "}
          </Route>
          <Route path="/transactions">
            {" "}
            <Index transactions={transactions} />{" "}
          </Route>
          <Route path="*">
            {" "}
            <FourOFour />{" "}
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
