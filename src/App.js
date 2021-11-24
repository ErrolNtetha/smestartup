import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Messages from './components/Messages/MessagesUI'
import Network from './components/Pages/Network';
import Sent from './components/Messages/Sent';
import Received from './components/Messages/Received';
import Login from './components/Pages/Login';
import Signup from './components/Pages/Signup';
import ChatUI from './components/Messages/ChatUI';
import Profile from './components/Pages/Profile';
import PrivateRoutes from './Routes/PrivateRoutes';
import RoleRoute from './Routes/RoleRoute';
import SampleUI from './InvestorUI/SampleUI';
import { get } from 'axios';

function App() {
  const [ isAuth, setIsAuth ] = useState(false);
  const [ userType, setUserType ] = useState('investor');

  useEffect(() => {
    async function getUserType() {
      const url = '';
      await get(url) 
        .then(res => {
          console.log(res)
          setUserType(res)
        })
        .catch(err => console.log(err));
    }
  }, [])

  return (
        <Router>
          <div className="App">
            { isAuth && <Header /> }

              <Switch>
                <Route path='/messages/inbox' component={Messages} />
                <Route path='/mynetwork' component={Network} />
                <Route path='/messages/msg' component={ChatUI} />
                <Route path='/messages/sent' component={Sent} />
                <Route path='/messages/received' component={Received} />
                <Route path='/login' component={Login} />
                <Route path='/signup' component={Signup} />

                {/* <Route path='/profile' component={Profile} /> */}
                <PrivateRoutes path='/profile' component={Profile} isAuth={isAuth} />
                <PrivateRoutes path='/mynetwork' component={Network} isAuth={isAuth} />
                <PrivateRoutes path='/messages/msg' component={ChatUI} isAuth={isAuth} />
                <PrivateRoutes path='/messages/sent' component={Sent} isAuth={isAuth} />

                {/* <RoleRoute pathname='/' exact isAuth={isAuth} component={SampleUI} role={userType} /> */}
                <RoleRoute pathname='/feed' exact isAuth={isAuth} component={Home} role={userType} />
              </Switch>
          </div>
        </Router>
  );
}

export default App;
