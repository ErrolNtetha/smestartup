/* eslint-disable func-names */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
// import { Wrapper } from 'containers';
import { Main } from './routes';
import './scss/_index.scss';

const App:React.FC = function () {
  return (
    <Router>
      <div className='darkTheme'>
        <Main />
      </div>
    </Router>
  );
};

export default App;
