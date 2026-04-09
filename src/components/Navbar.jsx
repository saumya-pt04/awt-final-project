import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2>Student Job Board</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/post-job">Post Job</Link>
        <Link to="/dashboard">Profile</Link>

        {/* Authentication Links */}
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Logout</Link>
      </div>

    </nav>
  );
}

export default Navbar;