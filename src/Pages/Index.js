
import Transactions from "../Components/Transactions";
import TotalAmount from "../Components/TotalAmount"

function Index({ transactions }) {
 
  return (
    <div className="Index">
      <h2>Index</h2>
      <aside>
        <TotalAmount transactions={transactions}/>
      </aside>
      <Transactions transactions={transactions} />
    </div>
  );
}

export default Index;
