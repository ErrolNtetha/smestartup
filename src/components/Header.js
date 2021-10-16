import React, {useState} from "react";
import { FaBars, FaSistrix } from "react-icons/fa";
import "../styles/header.scss";
import Menu from "./Menu";

export default function Header(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(true)
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
          <span className="verge"> Mphumeleli Ntetha </span>
        </h3>
        { showMenu && <Menu onClose={showMenu} onMenuClose={() => setShowMenu(!showMenu)}  /> }
        {isLoggedIn ? (
          <FaSistrix className="faSearch" />
        ) : (
          <span className="icons">
            <a onClick={onClickHandler} href="/login" className="login"> Log In </a>
          </span>
          
        )}
      </section>
    </header>
  );
}
