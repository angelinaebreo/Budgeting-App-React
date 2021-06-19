import Transactions from "../Components/Transactions";
import SpentSoFar from "../Components/SpentSoFar";
import Budget from "../Components/Budget";
import Remaining from "../Components/Remaining";
import { useState } from "react";

function Index({ transactions }) {
  const [budget, setBudget] = useState(2000);
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = (value) => {
    setIsEditing(false);
    setBudget(value);
  };

  return (
    <div className="container">
      <h2 className="mt-3">Transactions</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <Budget
            budget={budget}
            handleSaveClick={handleSaveClick}
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
