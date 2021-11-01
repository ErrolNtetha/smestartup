import React from 'react'
import cat from '../../assets/cat.jpg';

export default function Profile() {
    return (
        <section className='profileContainer'>
            <section className='profile'>
                <header>

                </header>
                <section>
                    <section className='profileOverview'>
                        <img src={cat} alt="" />
                        <span>
                            <h4> Mphumeleli Ntetha </h4>
                            <p> mphumier@outlook.com </p>
                        </span>
                    </section>
                    <section>
                        <p>  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsam eaque possimus soluta quidem iste repellendus. Culpa magni assumenda provident labore!</p>
                    </section>
                </section>
                
            </section>
        </section>
    )
}
