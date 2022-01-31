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
      pathname: "/feed",
      id: uuid(),
    },
    // {
    //   nav: "Messages",
    //   icon: <FaBookmark />,
    //   pathname: "/messages/inbox/",
    //   id: uuid(),
    // },
    {
      nav: "Directory",
      icon: <FaUsers />,
      pathname: "/directory",
      id: uuid(),
    },
    {
      nav: "Saved Lists",
      icon: <FaBookmark />,
      pathname: "/bookmarks",
      id: uuid(),
    },
    {
      nav: "Browse Investors",
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
    // {
    //   nav: "Settings",
    //   icon: <FaCog />,
    //   pathname: "/settings",
    //   id: uuid(),
    // },
  ];

  export default menuItems;