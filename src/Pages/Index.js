import Transactions from "../Components/Transactions";
import SpentSoFar from "../Components/SpentSoFar";
import Budget from "../Components/Budget";
import Remaining from "../Components/Remaining";
import { apiURL } from "../util/apiURL";

import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE = apiURL();

function Index({ transactions }) {
  const [budget, setBudget] = useState(0);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    axios.get(`${API_BASE}/budget`).then((response) => {
      console.log(response.data);
      const { data } = response;
      setBudget(Number(data[0].budget));
    });
  }, []);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const updateBudget = (value) => {
    const budgetObj = { budget: value };
    //console.log(budgetObj)
    setIsEditing(false);
    axios
      .put(`${API_BASE}/budget`, budgetObj)
      .then(
        (response) => {
          console.log(response.data)
          setBudget(Number(response.data[0].budget));

      
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
    <div className="container">
      <h2 className="mt-3">Transactions</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget
            budget={budget}
            updateBudget={updateBudget}
            handleEditClick={handleEditClick}
            isEditing={isEditing}
          />
        </div>

        <div className="col-sm">
          <Remaining transactions={transactions} budget={budget} />
        </div>

        <div className="col-sm">
          <SpentSoFar transactions={transactions} budget={budget} />
        </div>

        <div className="row mt-3">
          <div className="col-sm">
            <Transactions transactions={transactions} budget={budget} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
