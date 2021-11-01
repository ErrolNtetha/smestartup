import React from 'react'

export function PostButton({postButton}) {
    return  <button onClick={postButton}> Create New Post </button>
}

export function Cancel({onPost, postButton}) {
    return (
        <React.Fragment>
            <button onClick={postButton}> Cancel </button>
            <button onClick={onPost}> Post</button>
        </React.Fragment>
    )
}
