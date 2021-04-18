import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <navbar className="Navbar">
      <nav className="Nav">
        <Link
          to={{
            pathname: "/",
          }}
        >
          Home
        </Link>
        <Link
          to={{
            pathname: "/bitcoin",
            article: { article: "bitcoin" },
          }}
        >
          Bitcoin
        </Link>
        <Link
          to={{
            pathname: "/covid",
            article: { article: "covid" },
          }}
        >
          Covid
        </Link>

        <Link
          to={{
            pathname: "/machinelearning",
            article: { article: "machinelearning" },
          }}
        >
          Machine Learning
        </Link>
        <Link
          to={{
            pathname: "/savelist",
          }}
        >
          Save List
        </Link>
      </nav>
    </navbar>
  );
};

export default Navbar;
