import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="btn btn-primary">
          <Link to="/" className="link-light">
            Home
          </Link>
        </button>

        <button className="btn btn-primary">
          <Link to="/transactions" className="link-light">
            Transactions
          </Link>
        </button>

        <button className="btn btn-primary">
          <Link to="/transactions/new" className="link-light">
            New Transaction
          </Link>
        </button>
      </div>
    </nav>
  );
}
