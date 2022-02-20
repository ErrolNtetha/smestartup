import React from 'react';
import Post from './Post';
import Header from './Header';
import cat from '../assets/cat.jpg';
import cover from '../assets/cover/cover.png';

export default function Feed() {

    const posts = ['This is the message i got from the manager at work. I want to show the team.', 'post 2', 'post 1', 'post 2', 'post 1', 'post 2'];

    return (
       <>
         <Header headerContainer='headerContainer' style={{ color: '#fff' }} />
         <section className='feedContainer'>
            <aside className='leftAside'>
                    <img src={cover} alt="" />
                    <img src={cat} alt="my cover" className='profileImageP' />
                <section>
                    <h3> Mphumeleli Ntetha </h3>
                    <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, id. </p>
                    <hr className='divider' />
                    
                </section>
            </aside>   
            <main>
                {posts.map(post => <Post post={post} /> )}
            </main>
            <aside>
                <section>
                    <h3> Investors </h3>
                    {/* <hr className='divider' /> */}
                    <ul>
                        <hr className='divider' />
                        <li> 
                            <span> Njabulo Ndlovu </span> 
                            <button> Follow </button> 
                        </li>
                        <hr className='divider' />
                        <li> 
                            <span> Syanda Dlamini </span> 
                            <button> Follow </button> 
                        </li>
                        <hr className='divider' />
                        <li> 
                            <span> Thabani Makhanya </span> 
                            <button> Follow </button> 
                        </li>
                        <hr className='divider' />
                        <li> 
                            <span> Mphumeleli Ntetha </span> 
                            <button> Follow </button> 
                        </li>
                    </ul>
                </section>
                
            </aside>
        </section>
       </>
    )
}
