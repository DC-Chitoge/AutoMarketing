import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
export const Header = () => {
  return (
    <div className="Container">
      <div className="Header">
        <label className="logo">Marketing Auto</label>
        <ul className="item">
          <li>
            <Link to="/">Marketing Auto</Link>
          </li>
          <li>
            <Link to="/campain">Chiến dịch</Link>
          </li>
          <li>
            <Link to="/oop">Cơ hội</Link>
          </li>
          <li>
            <Link to="/email">Email Marketing</Link>
          </li>
          <li>
            <Link to="/sms">SMS Marketing</Link>
          </li>
          <li>
            <Link to="/landing">Landing Pages</Link>
          </li>
          <li>
            <Link to="/option">Option Form</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
