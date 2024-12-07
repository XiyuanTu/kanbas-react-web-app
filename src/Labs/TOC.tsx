import React from 'react';
import { Link, useLocation } from "react-router-dom"; // Import useLocation

export default function TOC() {
  const { pathname } = useLocation(); // Get the current pathname

  return (
    <ul className="nav nav-pills">
      {/* Labs Link */}
      <li className="nav-item">
        <Link to="/Labs" className="nav-link">
          Labs
        </Link>
      </li>

      {/* Lab 1 Link */}
      <li className="nav-item">
        <Link
          to="/Labs/Lab1"
          className={`nav-link ${pathname.includes("Lab1") ? "active" : ""}`}
        >
          Lab 1
        </Link>
      </li>

      {/* Lab 2 Link */}
      <li className="nav-item">
        <Link
          to="/Labs/Lab2"
          className={`nav-link ${pathname.includes("Lab2") ? "active" : ""}`}
        >
          Lab 2
        </Link>
      </li>

      {/* Lab 3 Link */}
      <li className="nav-item">
        <Link
          to="/Labs/Lab3"
          className={`nav-link ${pathname.includes("Lab3") ? "active" : ""}`}
        >
          Lab 3
        </Link>
      </li>

      {/* Lab 4 Link */}
      <li className="nav-item">
        <Link
          to="/Labs/Lab4"
          className={`nav-link ${pathname.includes("Lab4") ? "active" : ""}`}
        >
          Lab 4
        </Link>
      </li>

            {/* Lab 5 Link */}
            <li className="nav-item">
        <Link
          to="/Labs/Lab5"
          className={`nav-link ${pathname.includes("Lab5") ? "active" : ""}`}
        >
          Lab 5
        </Link>
      </li>

      {/* Kanbas Link */}
      <li className="nav-item">
        <Link to="/Kanbas" className="nav-link">
          Kanbas
        </Link>
      </li>

      {/* LinkedIn Link */}
      <li className="nav-item">
        <a
          href="https://www.linkedin.com/in/xiyuan/"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </li>

      {/* GitHub Link */}
      <li className="nav-item">
        <a
          href="https://github.com/XiyuanTu/kanbas-react-web-app"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub - Frontend(React App)
        </a>
      </li>

      <li className="nav-item">
        <a
          href="https://github.com/XiyuanTu/kanbas-server"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub - Backend(NodeJS Server)
        </a>
      </li>

      <li className="nav-item">
        <a
          href="https://kanbas-server-7685d332b718.herokuapp.com/"
          className="nav-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Heroku - Backend(NodeJS Server)
        </a>
      </li>
    </ul>
    
  );
}
