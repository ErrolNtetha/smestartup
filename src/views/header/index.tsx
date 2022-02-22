import React from 'react';
import { Link } from 'react-router-dom';

export const Header: React.FC = () => {
    return (
        <div>
            <p> This is a header Component! Go here: <Link to='/'> Home </Link> </p>
        </div>
    );
};