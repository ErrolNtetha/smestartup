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

    const onSubmit = (e) => {
        e.preventDefault();

        socket.emit("data")
        
        const data = {
            username,
            groupId,
        }
        console.log(data)
    }

    return (
        <div>
            <input type="text" placeholder="Name" onChange={e => setUsername(e.target.value)} />
            <input type="text" placeholder="Group ID" onChange={e => setGroupId(e.target.value)} />
            <button onClick={onSubmit}> Join Group </button>
        </div>
    )
}
