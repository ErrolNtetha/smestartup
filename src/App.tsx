/* eslint-disable func-names */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Main } from './routes';
import 'react-loading-skeleton/dist/skeleton.css';
import './scss/_index.scss';

const App:React.FC = function () {
  return (
    <Router>

        <SkeletonTheme baseColor='#222222' highlightColor='#181818'>
            <div className='darkTheme'>
                <Main />
            </div>
        </SkeletonTheme>
    </Router>
  );
};

export default App;
