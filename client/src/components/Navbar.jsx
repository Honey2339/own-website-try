import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="nav-components">
      <h2>Welcome !</h2>
      <Link to="/" className="home-nav">
        Home
      </Link>
      <Link to="/about" className="about-nav">
        Projects
      </Link>
      <svg
        className="moon"
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="30"
        viewBox="0 0 20 20"
        fill="none"
      >
        <path
          d="M10.8858 18.3333C13.4561 18.3333 15.8037 17.1639 17.359 15.2477C17.589 14.9642 17.3382 14.5501 16.9826 14.6178C12.9395 15.3878 9.22668 12.2878 9.22668 8.20652C9.22668 5.85554 10.4852 3.69366 12.5307 2.52963C12.846 2.3502 12.7667 1.87217 12.4084 1.80599C11.9061 1.71338 11.3965 1.66675 10.8858 1.66667C6.28586 1.66667 2.55243 5.39424 2.55243 10C2.55243 14.5999 6.28 18.3333 10.8858 18.3333Z"
          // fill="#F9FAFB"
        />
      </svg>
    </div>
  );
}

export default Navbar;
