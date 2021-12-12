import React from 'react';
import { FaEdit } from 'react-icons/fa';

export function PostButton({ postButton }) {
    return  <button onClick={postButton}> Create New List  <FaEdit /> </button>
}

export function Cancel({ onPost, postButton, onSubmitHandler }) {
    return (
        <React.Fragment>
            <button onClick={postButton}> Cancel </button>
            <button onClick={ onSubmitHandler }> Post</button>
        </React.Fragment>
    )
}
