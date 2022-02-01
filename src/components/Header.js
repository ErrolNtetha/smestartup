import React, {useState} from "react";
import { FaAlignLeft, FaSistrix } from "react-icons/fa";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import "../scss/main.scss";
import Menu from "./Menu";
import logo from '../assets/logo-banner1.png';

export default function Header({ headerContainer }) {

  const [showMenu, setShowMenu] = useState(false);
  const [ onSearch, setOnSearch ] = useState(false);
  const isLoggedIn = useSelector(state => state.isLogged);

  return (
    <header className={headerContainer}>      
      <section className="header">
        <FaAlignLeft className="faBars" onClick={() => setShowMenu(!showMenu)} />
        <h3 id={onSearch && 'verg'}>
          <span className="verge">
            <img src={logo} alt="" />
          </span>
        </h3>
        <nav className="menuDesktop">
          <ul>
              <li> Home </li>
              <li> Features </li>
              <li> About </li>
              <li> Contact </li>
          </ul>
        </nav>
        { showMenu && 
          <Menu className='headerMenu' 
          isLoggedIn={isLoggedIn} 
          onClose={showMenu} 
          onMenuClose={() => setShowMenu(!showMenu)}  
          /> 
        }


        { 
        isLoggedIn ? (
          onSearch ? 
          <Search /> : 
              <FaSistrix onClick={() => setOnSearch(!onSearch)} 
              className="faSearch" />
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
