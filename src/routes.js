import React from 'react';

import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Index} from './containers/Index';

const Home = () => (<div><h1>Welcome home</h1></div>)
const About = () => (<div><h1>About</h1></div>)

export class routes extends React.Component {
    render() {
        return (
            <Route path="/" component={Home}>
                <IndexRoute component={Home}/>
                <Route path="home" component={Home}/>
                <Route path="about" component={About}/>
            </Route>
        )
    }
}

export default routes