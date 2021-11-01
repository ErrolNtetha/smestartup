import React, { useState } from 'react'
import {PostButton, Cancel } from './PostButton';
import PostField from './PostField'

export default function CreatePost() {
    const [ postField, setPostField ] = useState(false);
    const [ subject, setSubject ] = useState('');

    // Track the changes in input field
    const onChangeHandler = (e) => {
        setSubject(e.target.value);
    }

    return (
        <React.Fragment>
            { postField && 
            <section className='postField'>
                <PostField onChangeHandler={onChangeHandler} />
            </section>}  
            <section className={ postField ? 'btnGroup' : 'createPost' }>
                { postField ? <Cancel onPost={() => console.log(subject)} postButton={() => setPostField(!postField)} /> 
                : <PostButton postButton={() => setPostField(!postField)} /> }
            </section>
        </React.Fragment>
    )
}
