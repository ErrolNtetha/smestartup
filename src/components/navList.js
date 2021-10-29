import {
    FaBookmark,
    FaHome,
    FaBell,
    FaUsers,
    FaWrench,                                                                                                                                                                                                                                                                                               
    FaPowerOff,
    FaCog,
    FaQuestion,
  } from "react-icons/fa";
import uuid from 'uuid';


const menuItems = [
    {
      nav: "Home",
      icon: <FaHome  />,
      pathname: "/",
      id: uuid(),
    },
    {
      nav: "Messages",
      icon: <FaBookmark />,
      pathname: "/messages/inbox/",
      id: uuid(),
    },
    {
      nav: "Browse People",
      icon: <FaUsers />,
      pathname: "/mynetwork",
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

  export default menuItems;