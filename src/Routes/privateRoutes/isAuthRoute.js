import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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

export default function isAuthRoute() {
    return (
        <div>
            
        </div>
    )
}
