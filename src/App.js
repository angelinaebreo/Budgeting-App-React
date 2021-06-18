
import './App.css';

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
      console.log(response)
      const { data } = response;
      setTransactions(data);
      
      console.log(data);
    });
  }, []);
  
  const addTransaction = () => {}
  const deleteTransaction = () => {}
  const updateTransaction = () => {}

  return (
    <div className="App">
      {/* <Router> */}
        <Navbar />
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/transactions/new"> <New addTransaction={addTransaction} /> </Route>
          <Route path="/transactions/:id"> <Show transactions={transactions} deleteTransaction={deleteTransaction} /> </Route>
          <Route path="/transactions/:id/edit"> <Edit transactions={transactions} updateTransaction={updateTransaction} /> </Route>
          <Route path="/transactions"> <Index transactions={transactions} /> </Route>
          <Route path="*"> <FourOFour /> </Route>
        </Switch>
      {/* </Router> */}
      
    </div>
  );
}

export default App;
