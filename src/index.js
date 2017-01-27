import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
// import ProductList from  './ProductList';
// import CheckOutMain from './checkOut/CheckOutMain'
// import SignUp from './sign-up/SignUp'
// import FunctionAsChildComponent from './functionAsComponent/FunctionAsChildComponent'
import Tweet from './tweet/Tweet'
// import App from './reactChildren/App'
import LandingPage from './landing-page/LandingPage'
// import Calculator from './calculator/Calculator'
import ImageProfilePic from './ImageProfilePic/ImageProfilePic'
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {Index} from './containers/Index';

// const Home = () => (<div><h1>Welcome home</h1></div>)
// const About = () => (<div><h1>About</h1></div>)

// export class App extends React.Component {
//     render() {
//         return (
//             <Router history={hashHistory}>
//                 <Route path="/" component={Index}>
//                     <IndexRoute component={Home}/>
//                     <Route path="home" component={Home}/>
//                     <Route path="about" component={About}/>
//                 </Route>
//             </Router>
//         )
//     }
// }

ReactDOM.render(<ImageProfilePic/>, document.querySelector('#root'));
