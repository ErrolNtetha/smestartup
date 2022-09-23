import React from 'react';
import { Avatar } from 'components/avatar';
import { FiMoreHorizontal } from 'react-icons/fi';
import { formatDistance } from 'date-fns';

interface Props {
    post: string;
    date: Date | number;
    id: string;
    author: any;
}

export const UserPosts = ({
    post,
    date,
    id,
    author
}: Props) => {
    return (
        <section className='profile__postsContainer'>
                <section className='profile__post' key={id}>
                    <span className='profile__titleContainer'>
                        <section className='profile__titleChild'>
                            <Avatar className='profile__postAvatar' avatar={author.avatar} />
                            <span className='profile__titleGroup' style={{ paddingLeft: '.8em' }}>
                                <span>
                                    <h4 className='profile__fullNames'> {author.name.firstName} {author.name.lastName} </h4>
                                    <p className='profile__timeAgo'> {formatDistance(new Date(date), new Date(), { addSuffix: true })} </p>
                                    <p className='profile__timeAgo'> {author.occupation} </p>
                                    <section />
                                </span>
                                <span style={{ alignSelf: 'start' }}>
                                    <FiMoreHorizontal className='profile__ellipsis' />
                                </span>
                            </span>
                        </section>
                    </span>
                    <p className='profile__userPost'>{post}</p>
                    <hr className='global' />
                </section>
        </section>
    );
};
