import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck, FaSearch, FaRegPaperPlane, FaArrowRight } from 'react-icons/fa';
import agreement from '../../assets/agreement.svg';
export default function LandingPage() {
    return (
        <div className='landingContainer'>
           <section className='heroSection'>
                <article className='leftColumn'>
                    <h2> A place where entreprenuers and investors meet </h2>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit eum et id ea possimus. </p>
                    <Link to='/signup'> <span> get started </span> <FaArrowRight className='arrow-right' /> </Link>
                    {/* <Link className='lastChildLink'> read more </Link> */}
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
                       <img src="" alt="" />
                       <h3> Feature 1 </h3>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem reiciendis similique molestias? </p>
                   </span>
                   <span>
                       <img src="" alt="" />
                       <h3> Feature 1 </h3>
                       <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim voluptas cumque veritatis commodi, velit aut? </p>
                   </span>
                   <span>
                       <img src="" alt="" />
                       <h3> Feature 1 </h3>
                       <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores sint autem nobis iste. </p>
                   </span>
               </div>
           </section>
           <section className="newsletter">
               <h3> Skip the queue. Be the first one to here new features </h3>
               <section>
                   <div className="newsletter-signup">
                        <input type="text" placeholder='Enter your email address' />
                        <button> Subscribe <FaRegPaperPlane /> </button>
                   </div>
               </section>
           </section>
        </div>
    )
}
