import React, {Component} from 'react';
import {Switch} from 'react-router';
import Demo from './demo-screen/index';
import MainRoute from '../components/layouts/MainRoute';
import Header from '../components/layouts/Header';
import PageNotFound from '../components/element/PageNotFound';

class App extends Component {
    render() {
        return (
            <div id="wrap">
                <Header/>
                <Switch>
                    <MainRoute footer exact path={`/cloud/demo`} component={Demo}/>
                    
                    <MainRoute session footer component={PageNotFound} />
                </Switch>
            </div>
        );
    }
}

export default App;
