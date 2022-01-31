import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaRegPaperPlane, FaArrowRight, FaFacebookSquare, FaTelegram, FaYoutube, FaInstagram } from 'react-icons/fa';
import agreement from '../../assets/agreement.svg';
import Header from '../Header';

export default function LandingPage() {
    const [email, setEmail] = useState('');
    const [ validate, setValidate ] = useState('');

    const success = 'Thank you. You have successfully subscribed!';
    const emptyField = 'The email is required. Please enter your email.';

    const handleSubmit = (e) => {
        e.preventDefault();

        if(!email) {
            return setValidate(emptyField);
        }
        else {
            setEmail('');
            setValidate(success);
        }
    }

    return (
        <>
            <Header headerContainer='headerContainer' />
            <div className='landingContainer'>
            <section className='heroSection'>
                    <article className='leftColumn'>
                            <h2> Lorem ipsum dolor sit amet consectetur. </h2>
                            <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis libero nesciunt at totam voluptatem possimus velit magni aperiam itaque non quidem eligendi quas expedita corrupti, inventore animi sapiente, a neque. </p>
                            <Link to='/signup'> 
                                <span> get started </span> 
                                    <FaArrowRight className='arrow-right' /> 
                            </Link>
                        {/* <Link className='lastChildLink'> read more </Link> */}
                            {/* <form onSubmit={handleSubmit} className="newsletter-signup">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter your email address' />
                                <button type='submit'> Notify Me <FaRegPaperPlane /> </button>
                            </form>
                            <p className='feedback' style={{color: validate === emptyField && 'red' }} > { validate }  </p> */}
                    </article>
                    <article className='rightColumn'>
                        <img src={agreement} alt="" className="agreement" />
                    </article>
            </section>
            <section className="features">
                {/* <div className="searchDiv">
                        <FaSearch className='searchBar' />
                        <input type="text" placeholder='Search people and businesses' />
                </div> */}

                <div className="featureList">
                    <span>
                        {/* <FaMapMarkedAlt className='featureSVG' /> */}
                        <section className='details'>
                                <h3> Title </h3>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis similique molestias? </p>
                                <br />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit nostrum esse. Tempore ipsam debitis commodi modi qui eum quod.</p>
                                
                        </section>
                        <div className="step">
                            01
                        </div>
                    </span>
                    <span>
                    <section className='details'>
                                <h3> Title </h3>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis similique molestias? </p>
                                <br />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit nostrum esse. Tempore ipsam debitis commodi modi qui eum quod.</p>
                                
                        </section>
                        <div className="step">
                            02
                        </div>
                    </span>
                    <span>
                    <section className='details'>
                                <h3> Title </h3>
                                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis similique molestias? </p>
                                <br />
                                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium fugit nostrum esse. Tempore ipsam debitis commodi modi qui eum quod.</p>
                                
                        </section>
                        <div className="step">
                            03
                        </div>
                    </span>
                </div>
            </section>
            <section className="suggestions">
                    <span>
                        <h1> Help us help the community grow... </h1>
                        <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis, laudantium atque! Odit iure aut est quibusdam cumque, deleniti illum, molestias ipsa iusto dolorum, tenetur sequi doloremque neque omnis! Consequatur, accusamus. </p>
                    </span>
                    <span>
                        <section>
                            <h3> Fill the form </h3>
                            <p> Lorem ipsum dolor sit amet consectetur. </p>
                        </section>
                        <form action="">
                            <input type="text" placeholder='Your name' name='name' />
                            <input type="email" placeholder='Enter your email' name="email" />
                            <textarea 
                                style={{ fontFamily: "sans-serif" }} 
                                placeholder='Please write to us where you would like us to improve your experience on our site...' 
                                name="suggestion" 
                                id="" 
                                cols="30" 
                                rows="10">
                            </textarea>
                            <button type='submit'> submit </button>
                        </form>
                    </span>
            </section>
            <section className="newsletter">
                <h3> Skip the queue. Be the first one to hear our new features as they launch! </h3>
                <section>
                    <div className="newsletter-signup">
                            <input type="text" placeholder='Enter your email address' />
                            <button> Subscribe <FaRegPaperPlane /> </button>    
                    </div>
                </section>
            </section>
            <section className="footer">
                    <section>
                        <span>
                            <ul>
                                <li>Home</li>
                                <li>Resources</li>
                                <li>Downloads</li>
                                <li>Mission</li>
                                <li>Values</li>
                                <li>Contacts</li>
                            </ul>
                        </span>
                        <span>
                            <ul>
                                <li>Privacy Policy</li>
                                <li>Terms of Service</li>
                                <li>Infomation</li>
                            </ul>
                        </span>
                        <span>
                        </span>
                        <section className="socialIcons">
                            <span>
                                <ul>
                                    <li> <FaFacebookSquare /> </li>
                                    <li> <FaTelegram /> </li>
                                    <li> <FaYoutube /> </li>
                                    <li> <FaInstagram /> </li>
                                </ul>
                            </span>
                        </section>
                    </section>
                    <footer>
                        All Rights Reserved. 2022 Copyrights.
                    </footer>
            </section>
            </div>
        </>

    )
}

