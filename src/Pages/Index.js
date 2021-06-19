import Transactions from "../Components/Transactions";
import SpentSoFar from "../Components/SpentSoFar";

function Index({ transactions }) {
  return (
    <div className="container">
      <h2>Transactions</h2>
      <div className="row mt-3">
        <div className="col-sm">
          <SpentSoFar transactions={transactions} />
        </div>

        <div className="row mt-3">
          <div className="col-sm">
            <Transactions transactions={transactions} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
