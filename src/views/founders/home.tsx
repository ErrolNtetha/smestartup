import { Avatar } from 'components/avatar';
import React from 'react';

interface Props {
    author: {
        name: {
            firstName: string;
            lastName: string;
        }
    }
}

export const Home = ({ author }: Props) => {
    console.log('First Name: ', author);

    return (
        <section className='founder__homeContainer'>
            <section className='founder__left' />
            <section className='founder__center'>
                <span className='founder__nameGroup'>
                    <Avatar avatar='' className='founder__avatar' />
                    <section className='founder__names'>
                        <h5> {`${author.name.firstName} ${author.name.lastName}`} </h5>
                        <p> seeking for co-founder  </p>
                        <p> 3 days ago </p>
                    </section>
                </span>
                <hr className='global' />
                <section className='founder__post'>
                    <article> I am looking for someone who i can partner with who has an experience with Computer Programming and has a degree in Computer Science or Information Technology. I have an app idea and i need someone who has management qualities and able to take decisions on his or her own without relying much on others. </article>
                </section>
                <hr className='global' />
                <section className='founder__snapInfo'>
                    <p> Employment <span> Self-Employed </span> </p>
                    <p> City <span> Durban, ZA </span> </p>
                    <p> Investment Type <span> Land & Building </span> </p>
                    <p> Education <span> Business Administation </span> </p>
                </section>
                {/* <hr className='global' />
                <section className='founder__buttonGroup'>
                    <span> Save </span>
                    <span> Share </span>
                </section> */}
            </section>
            <section className='founder__right' />
        </section>
    );
};
