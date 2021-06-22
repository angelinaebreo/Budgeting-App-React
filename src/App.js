import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";

import { apiURL } from "./util/apiURL";
import Navbar from "./Components/Navbar";
import Edit from "./Pages/Edit";
import FourOFour from "./Pages/FourOFour";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

const API_BASE = apiURL();

function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalSum, setTotalSum] = useState(0);

  const fetchData = async () => {
    await axios.get(`${API_BASE}/transactions`).then((response) => {
      const { data } = response;
      setTransactions(data);
    });
    await axios.get(`${API_BASE}/total`).then((response) => {
      const { data } = response;
      setTotalSum(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const addTransaction = (newTransaction) => {
    axios
      .post(`${API_BASE}/transactions`, newTransaction)
      .then(
        (response) => {
          axios.get(`${API_BASE}/transactions`);
          setTransactions((prevTransactions) => [
            ...prevTransactions,
            response.data,
          ]);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
    axios.get(`${API_BASE}/total`).then((response) => {
      const { data } = response;
      setTotalSum(data);
    });
  };

  const deleteTransaction = (id) => {
    axios
      .delete(`${API_BASE}/transactions/${id}`)
      .then(
        (response) => {
          const transactionsCopy = [...transactions];
          transactionsCopy.splice(id, 1);
          setTransactions(transactionsCopy);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
    axios.get(`${API_BASE}/total`).then((response) => {
      const { data } = response;
      setTotalSum(data);
    });
  };

  const updateTransaction = (updatedTransaction, id) => {
    axios
      .put(`${API_BASE}/transactions/${id}`, updatedTransaction)
      .then(
        (response) => {
          const transactionsCopy = [...transactions];
          transactionsCopy[id] = response.data;
          setTransactions(transactionsCopy);
        },
        (error) => {
          console.log(error);
        }
      )
      .catch((c) => {
        console.warn("catch", c);
      });
    axios.get(`${API_BASE}/total`).then((response) => {
      const { data } = response;
      setTotalSum(data);
    });
  };

  return (
    <div className="App">
      <Router>
        <Navbar />
        <div className="container">
          <h1 className="mt-3">Budget App</h1>
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
                <Edit updateTransaction={updateTransaction} />{" "}
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
                <Index transactions={transactions} totalSum={totalSum} />{" "}
              </Route>
              <Route path="*">
                {" "}
                <FourOFour />{" "}
              </Route>
            </Switch>
          </main>
        </div>
      </Router>
    </div>
  );
}

export default App;
