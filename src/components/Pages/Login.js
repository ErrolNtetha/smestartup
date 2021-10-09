import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    return (
        <section className="loginContainer">
            <section>
                <input type="text" name="usename" placeholder="Username" />
                <input type="password" name="usename" placeholder="Password" />
                <Link to='/login'> login </Link>
            </section>
        </section>
    )
}
