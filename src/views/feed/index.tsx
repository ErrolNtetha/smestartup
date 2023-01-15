import React, { useState } from 'react';
import { Sidebar } from './sidebar';
import { Lists } from './lists';

export const FeedContainer = () => {
    const [open, setOpen] = useState(false);
    const togglePostField = () => {
        setOpen(!open);
    };
  return (
    <section className='feed'>
        <section className='feed__mainContent container'>
            <Sidebar toggleField={togglePostField} />
            <Lists isOpen={open} isToggled={togglePostField} />
            <section className='feed__rightColumn' />
        </section>
    </section>
  );
};
