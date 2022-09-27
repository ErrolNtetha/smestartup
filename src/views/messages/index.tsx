import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Header } from 'views/header';
import { Conversation } from './inbox/conversation';

export const MessagesContainer = () => {
    return (
        <main className='messages'>
            <Header>
                <FiArrowLeft className='messages__backIcon' />
                <section>
                    <h4> Mphumeleli Ntetha </h4>
                </section>
            </Header>
            <section>
                <Conversation />
            </section>
        </main>
    );
};
