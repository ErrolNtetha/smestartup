import React from 'react';
import { formatDistance } from 'date-fns';
import { Avatar } from '../../../components/avatar';

interface CommentProps {
    firstName: string;
    lastName: string;
    occupation: string;
    comment: string;
    date: Date | number;
    avatar: string;
}

export const Comment = ({
    firstName,
    lastName,
    occupation,
    comment,
    date,
    avatar
} : CommentProps) => {
    return (
        <section className='feed__comment'>
            <Avatar avatar={avatar} className='feed__commentAvatar' />
            <section>
                <span>
                    <p className='feed__commentNames'> {firstName} {lastName} </p>
                    <p> {occupation} </p>
                    <p> {formatDistance(new Date(date), new Date(), { addSuffix: true })} </p>
                </span>
                <p className='feed__commentText'> {comment} </p>
            </section>
        </section>
    );
};
