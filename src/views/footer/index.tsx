import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSend } from 'react-icons/fi';
import { axiosPublic } from 'config/axiosInstance';
import { SyncLoader } from 'react-spinners';
import { useStore } from 'hoc/useStore';

export const Footer = () => {
    const [fullNames, setFullNames] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState<Boolean | null>(null);
    const { isLogged } = useStore();

    const formData = {
        fullNames,
        lastName,
        email
    };

    const handleSubmit = async (e: React.ChangeEvent) => {
        e.preventDefault();
        if (!fullNames || !lastName || !email) {
            return;
        }

        setLoading(true);

        await axiosPublic.post('/', formData)
            .then((res) => {
                if (res.status === 250) {
                    setResponse(res.data.message);
                    setLoading(false);
                }
            })
            .catch(({ error }) => {
                console.log(error);
                setLoading(false);
                setResponse('There was a problem subscribing. Please try again later.');
            });
    };

  return (
    <>
    <footer className='footer'>
      <section className='footer__left'>
        <h2 className='footer__intro'> Stay up to date! </h2>
        <p> Fill up your details so that you do not miss out on our new important updates and announcements. </p>
        <form onSubmit={handleSubmit}>
            {!isLogged && (
                <section>
                    <input type='text' onChange={(e) => setFullNames(e.target.value)} placeholder='Your Full Names' name='fullNames' className='footer__inputs' />
                    <input type='text' onChange={(e) => setLastName(e.target.value)} placeholder='Your Last Name' name='lastName' className='footer__inputs' />
                    <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email Address' name='email' className='footer__inputs' />
                </section>
            )}
            <button type='submit' className='footer__button--submit'> {loading ? <SyncLoader size={8} color='#fff' /> : <section> subscribe <FiSend>hbhj</FiSend> </section>} </button>
          <section>
            {!loading && response}
          </section>
        </form>
      </section>
      <section className='footer__right'>
        <span className='footer__moreInfo'>
          <h2> Want to know more <span className='footer__about'>about us</span>? </h2>
          <p> You can always send us an email to <a href='mailto:info@blendot.com'>info@blendot.com</a> and we will be happy to answer your enquiries. </p>
        </span>
        <span className='footer__links'>
          <h3> Where to now? </h3>
          <ul>
              <li className='footer__link'><Link to={isLogged ? '/feed' : '/'}> Home </Link></li>
            <li className='footer__link'><Link to='/'> FAQ </Link></li>
            {!isLogged && <li className='footer__link'><Link to='/'> Register </Link></li>}
            <li className='footer__link'><a href='../legalties/terms.html'> Terms of Use </a></li>
            <li className='footer__link'><Link to='/'> Privacy Policy </Link></li>
          </ul>
        </span>
      </section>
    </footer>
    <section className='footer__copyrights'>
        <span> &#169; Blendot, 2022. All Rights Reserved. </span>
        {/* <ul className='footer__socialLinks'>
                <li> <a href='fb.me/blendotSA'> <FiFacebook className='footer__facebook' /> </a></li>
                <li> <a href='linkedin.com'> <FiLinkedin className='footer__linkedin' /> </a></li>
            </ul> */}
    </section>
    </>
  );
};
