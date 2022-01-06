import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaSearch } from 'react-icons/fa';

export default function LandingPage() {
    return (
        <div className='landingContainer'>
           <section className='leftColumn'>
                <article>
                    <h2> Discover Businesses for Sale, potential investors for your business and more. </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum et id ea possimus. </p>
                    <Link to='/signup'> register </Link>
                    {/* <Link className='lastChildLink'> read more </Link> */}
                </article>
           </section>

           {/* this below article element is for the mobile view only */}
           <article className='features'>
                <section>
                    <h3> What you can do </h3>
                    <div className="squre"></div>
                    <p> Hey </p>
                    <section className='searchDiv'>
                        <input type="text" placeholder='Search' />
                        <section className="se">
                            <FaSearch className='s' />
                        </section>
                    </section>

                    {/* <ul>
                        <li> <FaCheck /> Item one</li>
                        <li> <FaCheck /> Item two</li>
                        <li> <FaCheck /> Item three</li>
                        <li> <FaCheck /> Item three</li>
                        <li> <FaCheck /> Item three</li>
                        <li> <FaCheck /> Item three</li>
                    </ul> */}
                </section>
            </article>
            {/* end here */}

           <section className='rightColumn'>
                <article>
                    <h2> This is a right column and stiff </h2>
                    <Link> Business </Link>
                </article>
           </section>
        </div>
    )
}
