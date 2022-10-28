/* eslint-disable func-names */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { SkeletonTheme } from 'react-loading-skeleton';
import { Main } from './routes';
import './scss/_index.scss';
import 'react-loading-skeleton/dist/skeleton.css';

const App:React.FC = function () {
  return (
    <Router>
        <SkeletonTheme baseColor='#181818' highlightColor='#222222'>
            <div className='darkTheme'>
                <Main />
            </div>
        </SkeletonTheme>
    </Router>
  );
};

export default App;
