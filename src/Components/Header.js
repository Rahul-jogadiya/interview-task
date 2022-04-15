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
            <a href="#">Join Now</a>{" "}
          </li>
          <li>
            <a href="#">Live Video</a>{" "}
          </li>
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
      </nav>
    </header>
  );
};

export default Header;
