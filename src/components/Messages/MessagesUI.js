import React from 'react';
import Chatlist from './Chats'
import { FaSearch } from 'react-icons/fa'
import "../../styles/header.scss";


export default function Messages() {
    return (
         <section className="chatParentConatainer">
            <section className="tabs">
                <ul className="tabsItem">
                    <li> Inbox </li>
                    <li> Sent </li>
                    <li> Received </li>
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


