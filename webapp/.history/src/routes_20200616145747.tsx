import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';
import CreatePoint from './pages/CreatePoint';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Home} path="/"/>
            <Route component={Home} path="/CreatePoint"/>
        </BrowserRouter>
    );
}
export default Routes;