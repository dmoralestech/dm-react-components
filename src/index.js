import React from 'react';
import ReactDOM from 'react-dom';

// import './index.css';
// import ProductList from  './ProductList';
// import CheckOutMain from './checkOut/CheckOutMain'
// import SignUp from './sign-up/SignUp'
// import FunctionAsChildComponent from './functionAsComponent/FunctionAsChildComponent'
// import Tweet from './tweet/Tweet'
// import App from './reactChildren/App'
// import LandingPage from './landing-page/LandingPage'
// import Calculator from './calculator/Calculator'
import ImageProfilePic from './ImageProfilePic/ImageProfilePic'

import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import routes from './routes'

ReactDOM.render(<ImageProfilePic/>,
    document.querySelector('#root'));

// ReactDOM.render(<Router history={browserHistory} routes={routes}/>,
//     document.querySelector('#root'));
