import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="navbar navbar-light bg-light nav-fill">
      <button className="">
        <Link to="/" className="nav-link">
          Home
        </Link>
      </button>

      <button className="">
        <Link to="/transactions" className="nav-link">
          Transactions
        </Link>
      </button>

      <button className="">
        <Link to="/transactions/new" className="nav-link">
          New Transaction
        </Link>
      </button>
    </nav>
  );
}
