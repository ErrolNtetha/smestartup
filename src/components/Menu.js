import React, {useState} from "react";
import {
  FaBookmark,
  FaHome,
  FaBell,
  FaUsers,
  FaWrench,                                                                                                                                                                                                                                                                                               
  FaTimes,
  FaPowerOff,
  FaCog,
  FaQuestion, 
} from "react-icons/fa";
import Header from './Header'
import { name, image} from "faker";

import '../styles/header.scss'

export default function Menu(props) {
  const { firstName, lastName } = name;
  const { avatar } = image;

  const menuItems = [
    {
      nav: "Home",
      icon: <FaHome />,
      pathname: "/",
      id: 1,
    },
    {
      nav: "Messages",
      icon: <FaBookmark />,
      pathname: "/",
      id: 2,
    },
    {
      nav: "Connections",
      icon: <FaUsers />,
      pathname: "/",
      id: 3,
    },
    {
      nav: "Saved for Later",
      icon: <FaBookmark />,
      pathname: "/",
      id: 3,
    },
    {
      nav: "Notifications",
      icon: <FaWrench />,
      pathname: "/",
      id: 3,
    },
    {
      nav: "Notifications",
      icon: <FaBell />,
      pathname: "/",
      id: 3,
    },
    {
      nav: "Help Center",
      icon: <FaQuestion />,
      pathname: "/",
      id: 3,
    },
    {
      nav: "Settings",
      icon: <FaCog />,
      pathname: "/",
      id: 3,
    },
    {
      nav: "Signout",
      icon: <FaPowerOff />,
      pathname: "/",
      id: 3,
    },
  ];

  return (
    <nav className="navMenu">
      <section className="times">
        <FaTimes className="close" onClick={props.onMenuClose} />
      </section>
      <section className="dashboard">
        <span className="subProfile">
          <img src={avatar()} className="profileImage" alt="thumbnail" />
          <span  style={{marginLeft: ".6em"}}>
            <h4>
              {firstName()} {lastName()}
            </h4>
            <a href="##"> View Profile </a>
          </span>
        </span>
      </section>
      <hr style={{ width: "90%", opacity: "40%" }} />
      <ul className="navItems">
        {
          menuItems.map(item => <li key={item.id} className="menuL"> {item.icon} {item.nav} </li>)
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
