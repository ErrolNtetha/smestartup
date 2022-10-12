import React from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FiArrowRight } from 'react-icons/fi';
import { Button } from '../../components/button';
import { title } from './typo';

export const Hero: React.FC = () => {
    const history = useHistory();
    const isLoggedIn = useSelector((state) => state.isLogged);

  return (
    <section className='hero'>
        <section className='hero__innerHero container'>
            <aside className='hero__left'>
                <section />
                <span className='hero__bottom' style={{ padding: '1em 0' }}>
                    <p className='hero__left__title'> {title} </p>
                    { !isLoggedIn ? <Button onClick={() => history.push('/register')} className='hero__left--action'> get started <FiArrowRight style={{ fontSize: '1.2rem' }} /> </Button> : <Button onClick={() => history.push('/feed')} className='hero__left--action'> go to feed <FiArrowRight style={{ fontSize: '1.2rem' }} /> </Button>}
                    { !isLoggedIn && <Button onClick={() => history.push('/login')} className='hero__left--login'> login </Button>}
                </span>
            </aside>
            <aside className='hero__right' />
        </section>
    </section>
  );
};
