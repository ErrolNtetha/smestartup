import React from 'react';
import Post from './Post';
import Header from './Header';


export default function Feed() {

    const posts = ['post 1', 'post 2', 'post 1', 'post 2', 'post 1', 'post 2'];

    return (
       <>
         <Header headerContainer='headerContainer' style={{ color: '#fff' }} />
         <section className='feedContainer'>
            <aside>
                <section>
                    <h3> Profile </h3>
                    
                    <section>
                        
                    </section>
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
