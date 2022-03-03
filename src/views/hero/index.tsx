import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from '../../components/button';
import { para, title } from './typo';

export const Hero: React.FC = () => {
  const history = useHistory();
  return (
    <section className='hero'>
        <aside className='hero__left'>
            <p className='hero__left__title'> {title} </p>
            <p className='hero__left__paragraph'> {para} </p>
            <Button onClick={() => history.push('/register')} className='hero__left--action'> get started </Button>
        </aside>
        <aside className='hero__right'>
            This is left hero section
        </aside>
    </section>
  );
};