import React, {useState} from "react";
import { FaBars, FaSistrix } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../styles/header.scss";
import Menu from "./Menu";

export default function Header(props) {

  const [showMenu, setShowMenu] = useState(false);
  const [ onSearch, setOnSearch ] = useState(false);
  const isLoggedIn = useSelector(state => state.isLogged);

  return (
    <header className="headerContainer">      
      <section className="header">
        <FaBars className="faBars" onClick={() => setShowMenu(!showMenu)} />
        <h3 id={onSearch && 'verg'}>
          <span className="verge"> Mphumeleli Ntetha </span>
        </h3>
        { showMenu && <Menu isLoggedIn={isLoggedIn} onClose={showMenu} onMenuClose={() => setShowMenu(!showMenu)}  /> }


        {isLoggedIn ? (
          onSearch ? <Search /> : <FaSistrix onClick={() => setOnSearch(!onSearch)} className="faSearch" />
        ) : (
          <span className="icons">
            <Link to="/login" className="login"> Log In </Link>
          </span>
        )}
      </section>
    </header>
  );
}

export function Search() {
  return (
    <section className='searchBarContainer'>
      <input className='searchInputHeader' type='text' placeholder='Search posts...' />
    </section>
  )
}
