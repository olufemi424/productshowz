import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav>
      <div>
        <Link className="logo" to="/">
          The Nav
        </Link>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Products</Link>
        </li>
        <li>
          <Link to="/">Product</Link>
        </li>
      </ul>
    </nav>
  );
}
