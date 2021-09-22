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
import uuid from 'uuid';
import { name, image} from "faker";

import '../styles/header.scss'
import { Link } from "react-router-dom";

export default function Menu(props) {
  const { firstName, lastName } = name;
  const { avatar } = image;

  const menuItems = [
    {
      nav: "Home",
      icon: <FaHome />,
      pathname: "/",
      id: uuid(),
    },
    {
      nav: "Messages",
      icon: <FaBookmark />,
      pathname: "/messages",
      id: uuid(),
    },
    {
      nav: "Groups",
      icon: <FaUsers />,
      pathname: "/groups",
      id: uuid(),
    },
    {
      nav: "Saved for Later",
      icon: <FaBookmark />,
      pathname: "/bookmarks",
      id: uuid(),
    },
    {
      nav: "Notifications",
      icon: <FaWrench />,
      pathname: "/notification",
      id: uuid(),
    },
    {
      nav: "Notifications",
      icon: <FaBell />,
      pathname: "/jobs",
      id: uuid(),
    },
    {
      nav: "Help Center",
      icon: <FaQuestion />,
      pathname: "/help",
      id: uuid(),
    },
    {
      nav: "Settings",
      icon: <FaCog />,
      pathname: "/settings",
      id: uuid(),
    },
    {
      nav: "Signout",
      icon: <FaPowerOff />,
      pathname: "/logout",
      id: uuid(),
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
          menuItems.map(item => <li key={item.id} className="menuL"> {item.icon} <a href="##">  {item.nav}</a> </li>
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
