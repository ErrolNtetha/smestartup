import React from 'react';
import { useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Header } from '../header';
import { ProfileEdit } from './profileEdit';

export const Edit = () => {
    const history = useHistory();
    return (
        <>
            <Header>
                <FiArrowLeft style={{ fontSize: '1.6rem' }} onClick={() => history.goBack()} />
            </Header>
            <ProfileEdit />
        </>
    );
};
