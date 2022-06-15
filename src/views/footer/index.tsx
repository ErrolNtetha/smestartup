import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import axios from 'axios';
import { NODE_ENV } from 'config/baseURL';
import { SyncLoader } from 'react-spinners';

export const Footer = () => {
    const [fullNames, setFullNames] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState<Boolean | null>(null);

    const formData = {
        fullNames,
        lastName,
        email
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(formData);
        console.log('loading');
        setLoading(true);

        await axios.post(`${NODE_ENV()}`, formData)
            .then((res) => {
                if (res.statusText === 'OK') {
                    console.log('sent');
                    setResponse(res.data.message);
                    setLoading(false);
                }
            })
            .catch((err) => console.log(err));
    };

  return (
    <footer className='footer'>
      <section className='footer__left'>
        <h2 className='footer__intro'> Stay up to date! </h2>
        <p> Fill up your details so that you dont miss out on our new updates and important announcements. </p>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={(e) => setFullNames(e.target.value)} placeholder='Your Full Names' name='fullNames' className='footer__inputs' />
            <input type='text' onChange={(e) => setLastName(e.target.value)} placeholder='Your Last Name' name='lastName' className='footer__inputs' />
            <input type='text' onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' name='email' className='footer__inputs' />
            <button type='submit' className='footer__button--submit'> {loading ? <SyncLoader size={8} color='#fff' /> : <section> subscribe <FiSend>hbhj</FiSend> </section>} </button>
          <section>
            {!loading && response}
          </section>
        </form>
      </section>
      <section className='footer__right'>
        <span className='footer__moreInfo'>
          <h2> Want to know more <span className='footer__about'>about us</span>? </h2>
          <p> You can always visit us on our social media pages, or give send us an email to <a href='mailto:info@blendot.com'>info@blendot.com </a>. </p>
        </span>
        <span className='footer__links'>
          <h3> Where to now? </h3>
          <ul>
            <li className='footer__link'><Link to='/'> Home </Link></li>
            <li className='footer__link'><Link to='/'> FAQ </Link></li>
            <li className='footer__link'><Link to='/'> Suggestions </Link></li>
            <li className='footer__link'><Link to='/'> Register </Link></li>
            <li className='footer__link'><a href='../legalties/terms.html'> Terms of Use </a></li>
            <li className='footer__link'><Link to='/'> Policy </Link></li>
          </ul>
        </span>
      </section>
    </footer>
  );
};
