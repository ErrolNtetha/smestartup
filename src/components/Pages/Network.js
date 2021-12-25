import React, { useState } from 'react';
import io from 'socket.io-client';

const socket = io.connect("http://localhost:5000", {  
    allowRequest: (req, callback) => { 
        const noOriginHeader = req.headers.origin === undefined;    
        callback(null, noOriginHeader);  
    }
});

export default function Groups() {
    const [username, setUsername ] = useState('');
    const [groupId, setGroupId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        socket.emit("data")
        
        const data = {
            username,
            groupId,
        }
        console.log(data)
    }

    return (
            <form action="POST" onSubmit={handleSubmit}>
                <input type="text" placeholder='Please enter your name' />
                <button type='submit'> Submit </button>
            </form>
    )
}
