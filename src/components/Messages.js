import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Messages() {
    return (
            <section className="searchContainer">
                <div className="searchBar">
                    <section className="search">
                        <FaSearch  />
                    </section>
                    <input type="text" placeholder='Search chats...' />
                </div>
            </section>
    )
}
