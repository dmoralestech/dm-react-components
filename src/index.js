import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'

import './index.css';
// import ProductList from  './ProductList';
// import CheckOutMain from './checkOut/CheckOutMain'
// import SignUp from './sign-up/SignUp'
// import FunctionAsChildComponent from './functionAsComponent/FunctionAsChildComponent'
import Tweet from './tweet/Tweet'
// import App from './reactChildren/App'
import LandingPage from './landing-page/LandingPage'

const Home = () => (<div><h1>Welcome home</h1></div>)
const About = () => (<div><h1>About</h1></div>)

export class App extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Home} />
                <Route path="/landing-page" component={LandingPage} />
                <Route path="/tweet" component={Tweet} />
                <Route path="/about" component={About} />
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
