import React from "react";
import { Link } from "react-router-dom";

export const HeaderEmail = () => {
  return (
    <div className="Container">
      <div className="Header">
        <ul className="item">
          <li>
            <Link to="/email">Dach sách Email</Link>
          </li>
          <li>
            <Link to="/statis-email">Thống kê</Link>
          </li>
          <li>
            <Link to="/campain-eamil">Chiến dịch email</Link>
          </li>
          <li>
            <Link to="/sample-email">Mẫu email</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
