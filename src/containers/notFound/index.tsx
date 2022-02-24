import React from 'react';
import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <>
        <div>NotFound</div>
        <Link to='/somewhere'> Go back </Link>
    </>
  );
};