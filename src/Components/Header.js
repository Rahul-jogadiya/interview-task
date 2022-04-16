import React from "react";
import { AiOutlineSearch, AiFillQuestionCircle } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="logo">entastico!</div>
        <div className="links">
          <li>
            <a href="#" className="btn">
              Join Now
            </a>{" "}
          </li>
          <li>
            <a href="#" className="btn">
              Live Video
            </a>{" "}
          </li>
          <div className="menu">
            <li>
              <AiOutlineSearch />
            </li>
            <li>
              <AiFillQuestionCircle />
            </li>
            <li>
              <FaUserAlt />
            </li>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
