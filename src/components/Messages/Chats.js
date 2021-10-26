import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import chats from './index';

export default function Chatlist() {

    const [newUser, setNewUser ] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/messages')
            .then(res => {
                console.log(res.data)
                setNewUser(res.data)
            })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        
            .catch(err => console.log("There was an error ", err.data))
    }, [])

    console.log(newUser)
    

    return (
        <section className="chatContainer">
               {chats.map(item => {
                   return (
                       <Link to='/inbox/message' key={item.id} className="chat">
                           <img src={item.profilePicture} alt="" className="profileImage" />
                           <section className="personDetails">
                                <p className="profileNames"> {item.name} {item.lastName} </p>
                                <p className="message"> {item.message} </p>
                           </section>
                       </Link>
                   )
               })}
        </section>
    )
}
