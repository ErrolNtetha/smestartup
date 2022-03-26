import React from 'react';
import { Link } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';

export const Footer = () => {
  return (
    <footer className='footer'>
      <section className='footer__left'>
        <h2 className='footer__intro'> Stay up to date! </h2>
        <p> Fill up your details so that you dont miss out on our new updates and important announcements. </p>
        <form>
          <input type='text' placeholder='Your Full Names' className='footer__inputs' />
          <input type='text' placeholder='Your Last Name' className='footer__inputs' />
          <input type='text' placeholder='Email Address' className='footer__inputs' />
          <button type='submit' className='footer__button--submit'> subscribe <FiSend>hbhj</FiSend> </button>
        </form>
      </section>
      <section className='footer__right'>
        <span className='footer__moreInfo'>
          <h2> Want to know more <span className='footer__about'>about us</span>? </h2>
          <p> You can always visit us on our social media pages, or give us a call on 0795312272. </p>
        </span>
        <span className='footer__links'>
          <h3> Where to now? </h3>
          <ul>
            <li className='footer__link'><Link to='/'> Home </Link></li>
            <li className='footer__link'><Link to='/'> FAQ </Link></li>
            <li className='footer__link'><Link to='/'> Suggestions </Link></li>
            <li className='footer__link'><Link to='/'> Register </Link></li>
            <li className='footer__link'><Link to='/terms'> Terms of Use </Link></li>
            <li className='footer__link'><Link to='/'> Privacy Policy </Link></li>
          </ul>
        </span>
      </section>
    </footer>
  );
};