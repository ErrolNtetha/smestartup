import React, { useState, useEffect } from 'react';
import { FiSend } from 'react-icons/fi';
import io from 'socket.io-client';
// import { axiosPrivate } from 'config/axiosInstance';
// import { MenuItems } from '../menuItems';

const socket = io('http://localhost:5000/', { transports: ['websocket'] });

export const Conversation = () => {
    // const [isConneted, setIsConnected] = useState(socket.connected);
    const [message, setMessage] = useState('');
    // const [response, setResponse] = useState('');
    const [authorMessage, setAthorMessage] = useState('hey');
    const [otherMessage, setOtherMessage] = useState('');

    const sendMessage = () => {
        console.log('It works');
        socket.emit('send-message', message);
        setOtherMessage('hey');
    };

    useEffect(() => {
        socket.on('connect', () => {
            console.log('Online');
        });

        socket.on('disconnect', () => {
            console.log('False');
        });

        socket.on('receive_message', (data) => {
            setAthorMessage(data);
        });

        return () => {
            socket.off('connect');
            socket.off('disconnect');
            socket.off('off');
        };
    }, [socket]);

    return (
        <main className='messages__conversationContainer'>
            <section>
                { (authorMessage)
                    ? (
                            <section className='messages__messageLeft'>
                                {otherMessage}
                            </section>
                )
                    : (
                            <section className='messages__messageRight'>
                                {authorMessage}
                            </section>
                    )}
            </section>
            <span className='messages__textareaContainer'>
                <span>
                    <div contentEditable arial-aria-expanded='false' value={message} onChange={(e) => setMessage(e.target.value)} arial-aria-multiline='true' placeholder='Type a message' />
                    <FiSend onClick={sendMessage} className='messages__sendIcon' />
                </span>
            </span>
        </main>
    );
};
