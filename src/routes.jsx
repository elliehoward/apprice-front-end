import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './components/app';
import Home from './components/Home';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Help from './components/Help';
import List_Page from './components/Create_List/List_Page';
import ResultsPage from './components/Search_Results/Main';
import OneStore from './components/Search_Results/OneStore';
import TwoStore from './components/Search_Results/TwoStore';
import ThreeStore from './components/Search_Results/ThreeStore';


export default(
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="/signup" component={SignUp}/>
        <Route path="/login" component={Login}/>
        <Route path="/List_Page" component={List_Page}/>
        <Route path="/help" component={Help}/>
        <Route path="/result" component={ResultsPage}/>
        <Route path="/OneStore" component={OneStore}/>
        <Route path="/TwoStore" component={TwoStore}/>
        <Route path="/ThreeStore" component={ThreeStore}/>
    </Route>
);
