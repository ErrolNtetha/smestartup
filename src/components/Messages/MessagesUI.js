import React from 'react';
import Chatlist from './Chats'; 
import { FaSearch } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "../../styles/header.scss";


export default function Messages() {
    return (
         <section className="chatParentConatainer">
            <section className="tabs">
                <ul className="tabsItem">
                    <li>
                        <Link to='/messages/inbox'> Inbox </Link>
                    </li>
                    <li>
                        <Link to='/messages/sent'> Sent </Link>
                    </li>
                    <li>
                        <Link to='/messages/received'> Received </Link>
                    </li>
                </ul>
            </section>
            <Chatlist  />
            <Search />
         </section>   
    )
}

const Search = () => {
    return (
        <section className="searchContainer">
                <div className="searchBar">
                    <section className="search">
                        <FaSearch  />
                    </section>
                    <input type="text" placeholder='Search chats or messages...' />
                </div>
        </section>
    )
}


