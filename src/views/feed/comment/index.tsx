/* eslint-disable no-nested-ternary */

import { useFetchData } from 'hoc/useFetchData';
import React from 'react';
import { Comment } from './comment';

export interface CProps {
    comments: {
        author: {
            name: {
                firstName: string;
                lastName: string;
            }
        };
        createAt: Date | number;
        avatar: string;
        comment: string;
        occupation: string;
        _id: string;
    }[];
}

interface IProps { id: string }

export const Comments = ({ id } : IProps) => {
    const { data, errorMessage, loading } = useFetchData(`/api/v1/comments/get/${id}`);

    return (
        <section className='fee__listComments'>
            {errorMessage
                ? 'There was error loading comments'
                : loading
                ? 'Comments loading'
                : data?.comments?.comments?.map((item) => (
                    <Comment
                      firstName={item.author.name.firstName}
                      lastName={item.author.name.lastName}
                      date={item.createdAt}
                      comment={item.comment}
                      occupation={item.author.occupation}
                      avatar={item.author.avatar}
                      key={item._id}
                    />
            ))}
        </section>
    );
};
