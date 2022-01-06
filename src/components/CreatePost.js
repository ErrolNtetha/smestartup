import React from 'react';
import PostField from './PostField';
import { useSelector, useDispatch } from 'react-redux';
import toggleField_ON from '../store/actions/toggleField_ON';

export default function CreatePost({ postDetials }) {
    const toggle = useSelector(state => state.isToggleOn);
    const dispatch = useDispatch();

    return (
        <React.Fragment>
            { toggle ?
            <section className='postField'>
                <PostField onClick={postDetials} />
            </section> :
            <section className={ toggle ? 'btnGroup' : 'createPost' }>
                <button value='button' onClick={() => {
                    dispatch(toggleField_ON()); // toggling the state from false to true
                }}> create a list </button>
            </section> }
        </React.Fragment>
    )
}
