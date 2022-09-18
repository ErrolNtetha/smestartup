import React from 'react';
import { Avatar } from 'components/avatar';
import { FiMoreHorizontal } from 'react-icons/fi';
import { formatDistance } from 'date-fns';

interface Props {
    post: string;
    date: Date | number;
    id: string;
}

export const UserPosts = ({ post, date, id }: Props) => {
    return (
        <section className='profile__postsContainer'>
                <section className='profile__post' key={id}>
                    <span className='profile__titleContainer'>
                        <section className='profile__titleChild'>
                            <Avatar className='profile__postAvatar' avatar='' />
                            <span className='profile__titleGroup' style={{ paddingLeft: '.8em' }}>
                                <span>
                                    <h4 className='profile__fullNames'> Mphumeleli Errol Ntetha </h4>
                                    <p className='profile__timeAgo'> {formatDistance(new Date(date), new Date(), { addSuffix: true })} </p>
                                </span>
                                <span style={{ alignSelf: 'start' }}>
                                    <FiMoreHorizontal className='profile__ellipsis' />
                                </span>
                            </span>
                        </section>
                    </span>
                    <p>{post}</p>
                </section>
        </section>
    );
};
