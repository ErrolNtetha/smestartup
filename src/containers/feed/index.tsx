/* eslint-disable no-unused-expressions */
import axios from 'axios';
import React from 'react';
// import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
// import { RootState } from 'store';
import logged from 'store/actions/logged';
import loggout from 'store/actions/loggout';
import { FeedContainer } from '../../views/feed';
import { Header } from '../../views/header';

    export const Feed = () => {
    // interface IState {
    //     posts: {
    //         post: string
    //         _id: number
    //     }[]
    // }

    // const [posts, setPosts] = React.useState<IState['posts']>([]);
    // const loggedIn = useSelector((state: RootState) => state.isLogged);
    const dispatch = useDispatch();

    React.useEffect(() => {
        axios.get('https://backend-sme.herokuapp.com/feed', {
            headers: {
                'x-access-token': localStorage.getItem('token')
            }
        })
            .then((res) => {
                !res.data.isLoggedIn ? dispatch(logged()) : dispatch(loggout());
            })
            .catch((err) => console.log(err));
    });

    return (
        <>
            <Header />
            <section className='feed__feedContainer'>
               <FeedContainer />
            </section>
        </>
    );
};