import React from "react";
import { FaTimes, FaRegUserCircle } from "react-icons/fa";
import '../styles/header.scss';
import cat from '../assets/cat.jpg';
import { Link } from "react-router-dom";
import menuItems from './navList';

export default function Menu(props) {
  const myProfile = {
    name: "Mphumeleli",
    surname: "Ntetha",
    profilePicture: cat,
  }

  return (
    <nav className="navMenu">
      <section className="times">
        <FaTimes className="close" onClick={props.onMenuClose} />
      </section>
      {props.isLoggedIn ?
      <section className="dashboard">
        <span className="subProfile">
          <img src={ !myProfile.profilePicture ? <FaRegUserCircle /> : cat } className="profileImage" alt="" />
          <span  style={{marginLeft: "1.1rem"}}>
            <h4 style={{fontSize: "1.1rem"}}>
              {myProfile.name} {myProfile.surname}
            </h4>
            <p> mphumeleli@gmail.com </p>
              <Link to='/profile' onClick={props.onMenuClose}> View Profile </Link>
          </span>
        </span>
    </section> : <h2> Please login </h2>}
      <hr style={{ width: "80%", opacity: "30%" }} />
      <ul className="navItems">
        {
          menuItems.map(item => {
            return (
              <Link key={item.id} to={item.pathname} className="menuLinksContainer" onClick={props.onMenuClose}>
                <li className="menuL"> {item.icon}  <span> {item.nav} </span> </li>
              </Link>
            )
          } 
            )
        }
        
      </ul>
        <hr style={{ width: "90%", opacity: "40%" }} />
        <ul className="navItems1">
          <li> Business Funding </li>
          <li> Become an Investor </li>
          <li> Businesses for Sale </li>
        </ul>
    </nav>
  );
}
