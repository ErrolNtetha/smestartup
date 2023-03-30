import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import shoot from '../../assets/photoShoot.jpg';

export const Features = () => {
  return (
    <section className='features'>
        <section className='features__innerSection container'>
            <div className='features__header'>
                <h3> Discover a <span>South Africa</span>&apos;s new world of community for entrepreneurs in your fingertips. </h3>
                <p>
                    Gather with entrepreneurs, search for suppliers, find business partners and share your journey.

                </p>
            </div>
            <section className='features__featuresListContainer'>
                <section className='features__feature'>
                    <span> 01 </span>
                    <h4> Find reliable, verified suppliers for your business. </h4>
                    <p> Transact with confidence with verified suppliers across the country. Our suppliers are vetted upon listing and differentiated from others. </p>
                </section>

                <section className='features__feature'>
                    <span> 02 </span>
                    <h4> Take inspiration and make friends with other entrepreneurs like you. </h4>
                    <p> Stay on the loop with our <strong> Newsfeed </strong> and see what other entrepreneurs are up to during the day, get motivated and get going. </p>
                </section>

                <section className='features__feature'>
                    <span> 03 </span>
                    <h4> Fancy a partnership? Browse business partners. </h4>
                    <p> Businesses are never meant to be a lonely journey. Find complimentary skills with people who are passionate as you and start working on that business idea that keeps you awake at night! </p>
                </section>
            </section>
            <section className='features__showCaseContainer'>
                <aside className='features__imageContainer'>
                    <img src={shoot} alt='Fresh vegetables' className='features__veges' />
                </aside>
                <aside className='features__asideRight'>
                    <h4> Give your business a head-start with our <span>verified</span> suppliers. </h4>
                    <p> When supplying food products in South Africa, manufacturers must meet a number of compliance requirements set out by the country&apos;s food safety regulatory bodies. These requirements are put in place to ensure that food products are safe for consumption and meet certain quality standards. When determining if a supplier is trustworthy there are several key factors that should be considered. </p>
                    <section className='features__listPoints'>
                        <p> Our suppliers embrace: </p>
                        <div> <FiCheckCircle /> Transparency </div>
                        <div> <FiCheckCircle /> Compliance </div>
                        <div> <FiCheckCircle /> Quality </div>
                        <div> <FiCheckCircle /> Professionalism </div>
                        <div> <FiCheckCircle /> Reliability </div>
                    </section>
                </aside>
            </section>
        </section>
    </section>
  );
};
