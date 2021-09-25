import React from 'react'
import { name, image } from "faker";
import { FaSearch } from 'react-icons/fa'
import "../styles/header.scss"
import uuid from 'uuid'

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

const Chatlist = () => {
    const { firstName, lastName} = name;
    const { avatar } = image;

    const chats = [
        {
            name: firstName(),
            lastName: lastName(),
            message: "Hey please check your emails!",
            profilePicture: avatar(),
            id: uuid(),
        },
        {
            name: firstName(),
            lastName: lastName(),
            message: "Hey please check your emails!",
            profilePicture: avatar(),
            id: uuid(),
        },
        {
            name: firstName(),
            lastName: lastName(),
            message: "Hey please check your emails!",
            profilePicture: avatar(),
            id: uuid(),
        },
        {
            name: firstName(),
            lastName: lastName(),
            message: "Hey please check your emails!",
            profilePicture: avatar(),
            id: uuid(),
        },
        {
            name: firstName(),
            lastName: lastName(),
            message: "Hey please check your emails!",
            profilePicture: avatar(),
            id: uuid(),
        },
    ]

    return (
        <section className="chatContainer">
               {chats.map(item => {
                   return (
                       <section key={item.id} className="chat">
                           <img src={item.profilePicture} alt="" className="profileImage" />
                           <section className="personDetails">
                                <p className="profileNames"> {item.name} {item.lastName} </p>
                                <p className="message"> {item.message} </p>
                           </section>
                       </section>
                   )
               })}
        </section>
    )
}
