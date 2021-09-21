import React, {useState} from "react";
import { FaBars, FaBell, FaRegEdit, FaSearch } from "react-icons/fa";
import "../styles/header.scss";
import Menu from "./Menu";

export default function Header() {

  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const onClickHandler = () => {
    // Behaviour on click
    setIsLoggedIn(!isLoggedIn)
    console.log(isLoggedIn)
  }

  const [showMenu, setShowMenu] = useState(false)


  return (
    <header className="headerContainer">      
      <section className="header">
        <FaBars className="faBars" onClick={() => setShowMenu(!showMenu)} />
        <h3>
          <span className="verge"> mphumeleli ntetha </span>
        </h3>
        { showMenu && <Menu /> }
        {isLoggedIn ? (
          <FaSearch className="faSearch" />
        ) : (
          <span className="icons">
            <a onClick={onClickHandler} href="/login" className="login"> Log In </a>
          </span>
          
        )}
      </section>
    </header>
  );
}
