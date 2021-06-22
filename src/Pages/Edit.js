import TransactionEditForm from "../Components/TransactionEditForm";

function Edit({ updateTransaction, transactions, fetchData }) {
  return (
    <>
      <h3 className="mt-3">Edit Transaction</h3>
      <div className="row mt-3">
        <div className="col-sm">
          <TransactionEditForm updateTransaction={updateTransaction} />
        </div>
      </div>
    </>
  );
}

export default Edit;
