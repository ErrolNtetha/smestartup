import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import PublicRoutes from './publicRoutes/PublicRoutes';
import Private from './privateRoutes/Private';

export default function RoutesWrapper() {
    return (
        <Router>
            <Private /> 
            <PublicRoutes />
        </Router>
    )
}
