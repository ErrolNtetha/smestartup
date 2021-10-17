import React from 'react'
import '../styles/header.scss'

export default function ChatWindow() {
    return (
        <>
            <section>
                <p className='textMesssage'> Hello there! </p>
            </section>
            <section className="searchContainer">
                <div className="searchBar">
                    <section className="search">
                    
                    </section>
                    <input type="text" placeholder='Type a message' />
                </div>
            </section>
        </>
    )
}
