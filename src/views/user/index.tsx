import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Header } from 'views/header';
import { useFetchData } from 'hoc/useFetchData';
import Skeleton from 'react-loading-skeleton';

interface Props {
    user: {
        name: { firstName: string };
    }
}

export const Users = () => {
    const { data } = useFetchData('users/622a334f4ca80ec781fd4d72');
    return (
        <main className='user'>
            <Header>
                <FiArrowLeft className='goBackArrow' />
            </Header>
            <p> Users: </p>
            <Person user={data?.name} />
        </main>
    );
};

const Person = ({ user }: Props) => {
    return (
        <section>
            {user?.firstName || <Skeleton count={4} />}
        </section>
    );
};
